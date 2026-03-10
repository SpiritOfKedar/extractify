"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "Is this platform free to use?",
    answer:
      "Yes, our platform is completely free. There are no hidden charges, no premium plans, and no limits on how many downloads you can make. Every feature is fully accessible to all users without any cost.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No, you don't need to sign up or log in. Just paste your URL and download directly — no registration required.",
  },
  {
    question: "Is it safe to use this downloader?",
    answer:
      "Absolutely. We don't store any user data, and all connections are encrypted. Your privacy and security are our top priority.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support 22+ platforms including Instagram, YouTube, TikTok, Twitter/X, Facebook, Snapchat, LinkedIn, Pinterest, Reddit, and many more including document platforms like Scribd and SlideShare.",
  },
  {
    question: "Can I download in high quality?",
    answer:
      "Yes, we always try to provide the highest quality available for each piece of content. You can choose from available quality options before downloading.",
  },
  {
    question: "What should I do if a download isn't working?",
    answer:
      "Try refreshing the page and pasting the link again. Make sure the link is publicly accessible. If the issue persists, the platform may have recently changed its format — we update regularly to maintain compatibility.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Got questions? Here are answers to the most common ones."
        subtitleWidth="max-w-[480px]"
      />

      <div className="mt-10 max-w-[372px] md:max-w-[768px] mx-auto flex flex-col divide-y divide-[#e8e8e8]">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="py-5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between text-left gap-4"
            >
              <span
                className={`text-[16px] font-semibold transition-colors ${
                  openIndex === i ? "text-primary" : "text-[#2d2d2d]"
                }`}
              >
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#606060] transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-[300px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[14px] leading-[24px] text-[#606060]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
