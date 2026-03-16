"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UrlInput from "@/components/UrlInput";
import { detectContentTab } from "@/lib/url-tab-detect";
import { detectPlatformSlugFromUrl } from "@/lib/platform-detect";
import { useTranslation } from "@/lib/i18n";

import SharedLandingContent from "@/components/SharedLandingContent";
export default function Desktop() {
  const router = useRouter();
  const [inputError, setInputError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const { t } = useTranslation();

  const handleLandingSubmit = (url: string) => {
    const slug = detectPlatformSlugFromUrl(url);
    if (!slug) {
      setInputError(t("input.unsupported"));
      return;
    }

    setInputError(null);
    const params = new URLSearchParams({ url });
    const tab = detectContentTab(url, slug);
    if (tab) {
      params.set("tab", tab);
    }

    router.push(`/platform/${slug}?${params.toString()}`);
  };

  return (
    <div className="home-figma-page bg-[#f4f1f8] content-stretch flex items-start justify-center overflow-x-hidden pt-[52px] relative w-full min-h-screen" data-name="Desktop - 4" data-node-id="7:368">
      <div className="content-stretch flex flex-col gap-[60px] md:gap-[80px] lg:gap-[120px] items-center relative shrink-0 w-full max-w-[1440px] min-w-0 px-4 md:px-6 lg:px-0" data-node-id="35:319">
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[1068px]" data-node-id="landing:hero">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full max-w-[1068px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal min-w-0 relative shrink-0 text-[#2d2d2d] text-[clamp(1.25rem,5vw,2rem)] w-full">
              {t("hero.title")}
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] sm:leading-[28px] relative shrink-0 text-[#404040] text-[16px] sm:text-[20px] w-full max-w-[431px]">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="w-full flex justify-center px-2">
            <UrlInput onSubmit={handleLandingSubmit} />
          </div>
          <div className="bg-[#f8f8f8] border border-[#e5e5e5] content-stretch flex items-center justify-center h-auto min-h-[200px] md:h-[293px] relative rounded-[16px] shrink-0 w-full max-w-[620px] aspect-video md:aspect-auto">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic text-[#aaaaaa] text-[16px] text-center w-[332px]">
              {t("preview.empty")}
            </p>
          </div>
          {inputError && (
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d14343] text-[14px] text-center">
              {inputError}
            </p>
          )}
        </div>
        <SharedLandingContent />
      </div>
    </div>
  );
}
