export default function NumberedSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((item, i) => (
        <li
          key={item.title}
          className="flex items-start gap-6 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
        >
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue font-body text-[20px] font-bold text-white">
            {i + 1}
          </span>
          <span>
            <span className="block font-heading text-[19px] font-semibold leading-snug text-white sm:text-[21px]">
              {item.title}
            </span>
            <span className="mt-2 block max-w-[54ch] text-[16px] leading-relaxed text-[#A9B4C4]">
              {item.body}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
