"use client";

import { useState, type FormEvent } from "react";

const ENQUIRY_TYPES = [
  "Product access",
  "Partnership / Business",
  "Privacy / Data request",
  "Other",
] as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-card border border-white/20 bg-white/5 px-4 py-3 text-[16px] text-white placeholder:text-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue";
const labelClass = "mb-2 block text-[14px] font-semibold text-white";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [enquiryType, setEnquiryType] = useState<(typeof ENQUIRY_TYPES)[number]>("Product access");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message.trim()) next.message = "Enter a message.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, enquiryType, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent. We'll be in touch shortly.");
      setName("");
      setEmail("");
      setCompany("");
      setEnquiryType("Product access");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-[13px] text-white">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-[13px] text-white">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="enquiryType" className={labelClass}>
          Enquiry type
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={enquiryType}
          onChange={(e) => setEnquiryType(e.target.value as (typeof ENQUIRY_TYPES)[number])}
          className={`${inputClass} appearance-none`}
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-[13px] text-white">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-card bg-blue px-7 py-4 text-[18px] font-bold text-white transition-colors duration-200 hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      <p aria-live="polite" className="text-[15px] text-white">
        {status === "success" || status === "error" ? statusMessage : ""}
      </p>
    </form>
  );
}
