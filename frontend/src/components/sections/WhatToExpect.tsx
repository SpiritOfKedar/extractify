import { CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const expectations = [
  {
    title: "Fast Performance",
    description:
      "Downloads are processed in seconds, not minutes. We optimize every step for speed.",
  },
  {
    title: "Strong Privacy",
    description:
      "No tracking, no data collection. Your downloads and activity stay private.",
  },
  {
    title: "Free Access",
    description:
      "Use every feature without ever paying a dime. No trials, no upsells.",
  },
  {
    title: "Wide Platform Support",
    description:
      "Works with 22+ platforms, covering both social media and document-sharing sites.",
  },
  {
    title: "Consistent Experience",
    description:
      "Whether you're on mobile or desktop, the experience is smooth and reliable every time.",
  },
  {
    title: "Reliable Design",
    description:
      "Built to work every day without breaking — regularly updated for compatibility.",
  },
];

export default function WhatToExpect() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="What You Can Expect From Us"
        subtitle="A quick look at the values and standards we deliver with every download."
        subtitleWidth="max-w-[480px]"
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {expectations.map((e) => (
          <div key={e.title} className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[16px] font-semibold text-[#2d2d2d] mb-1">
                {e.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#606060]">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
