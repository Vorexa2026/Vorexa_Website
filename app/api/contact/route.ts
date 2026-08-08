import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail } from "@/content/products";

const ENQUIRY_TYPES = ["Product", "Partnership", "Investor", "Other"] as const;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, enquiryType, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (
    typeof enquiryType !== "string" ||
    !(ENQUIRY_TYPES as readonly string[]).includes(enquiryType)
  ) {
    return NextResponse.json({ error: "Select a valid enquiry type." }, { status: 400 });
  }
  if (company !== undefined && typeof company !== "string") {
    return NextResponse.json({ error: "Invalid company value." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The contact form isn't connected to email delivery yet. Please email us directly at " +
          contactEmail +
          ".",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  // Sender address. Resend will only accept a From address on a domain you have
  // verified in their dashboard — with one exception: onboarding@resend.dev,
  // their shared testing sender, which delivers only to the Resend account
  // owner's own address (currently info@vorexa.co.za, which is where enquiries
  // go anyway). So the default below works immediately, and upgrading to a
  // branded sender is just setting CONTACT_FROM_EMAIL once the domain's DNS
  // records are verified. See HANDOVER.md.
  const from = process.env.CONTACT_FROM_EMAIL ?? "Vorexa Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""} — ${enquiryType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Enquiry type: ${enquiryType}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      // Logged server-side (visible in Vercel runtime logs) so a delivery
      // failure is diagnosable — e.g. an unverified sending domain — without
      // leaking provider detail to the browser.
      console.error("[contact] Resend rejected the send:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] Unexpected error sending mail:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
