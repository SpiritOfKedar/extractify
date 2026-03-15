"use client";

import SectionHeader from "./SectionHeader";
import { useTranslation } from "@/lib/i18n";
import { platformConfigs } from "@/lib/platforms";

// Get all platforms in display order
const platforms = [
  "facebook",
  "youtube",
  "instagram",
  "twitter",
  "tiktok",
  "snapchat",
  "linkedin",
  "pinterest",
  "reddit",
  "tumblr",
  "twitch",
  "vimeo",
  "vk",
  "soundcloud",
  "telegram",
  "threads",
  "scribd",
  "slideshare",
  "issuu",
  "calameo",
  "yumpu",
  "slideserve",
].map((slug) => platformConfigs[slug]);

export default function PlatformGrid() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title={t("platformGrid.title")}
        subtitle={t("platformGrid.subtitle")}
        subtitleWidth="max-w-[381px]"
      />

      <div className="mt-10 grid grid-cols-3 md:grid-cols-8 lg:grid-cols-11 gap-y-5 md:gap-y-8 gap-x-0 md:gap-x-4 justify-items-center">
        {platforms.map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-2 w-[80px]">
            <div className="w-6 h-6 md:w-14 md:h-14 md:rounded-xl md:bg-white md:shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] flex items-center justify-center">
              {p.icon}
            </div>
            <span className="text-[14px] md:text-[11px] text-[#404040] text-center leading-tight">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
