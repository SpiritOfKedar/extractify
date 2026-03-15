"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UrlInput from "@/components/UrlInput";
import { detectContentTab } from "@/lib/url-tab-detect";
import { detectPlatformSlugFromUrl } from "@/lib/platform-detect";

const imgIcon = "/assets/figma/7-368/imgIcon.svg";
const imgIcon1 = "/assets/figma/7-368/imgIcon1.svg";
const imgIcon2 = "/assets/figma/7-368/imgIcon2.svg";
const imgIcon3 = "/assets/figma/7-368/imgIcon3.svg";
const imgVector = "/assets/figma/7-368/imgVector.svg";
const imgSpeechBalloon = "/assets/figma/7-368/imgSpeechBalloon.png";
const imgGroup = "/assets/figma/7-368/imgGroup.svg";
const imgVector1 = "/assets/figma/7-368/imgVector1.svg";
const imgVector2 = "/assets/figma/7-368/imgVector2.svg";
const imgGroup1 = "/assets/figma/7-368/imgGroup1.svg";
const imgGroup3 = "/assets/figma/7-368/imgGroup3.svg";
const imgPath4 = "/assets/figma/7-368/imgPath4.svg";
const imgGroup2 = "/assets/figma/7-368/imgGroup2.svg";
const imgGroup15 = "/assets/figma/7-368/imgGroup15.svg";
const imgVector3 = "/assets/figma/7-368/imgVector3.svg";
const imgVector4 = "/assets/figma/7-368/imgVector4.svg";
const imgElements = "/assets/figma/7-368/imgElements.svg";
const imgElements1 = "/assets/figma/7-368/imgElements1.svg";
const imgElements2 = "/assets/figma/7-368/imgElements2.svg";
const imgVector5 = "/assets/figma/7-368/imgVector5.svg";
const imgIcon4 = "/assets/figma/7-368/imgIcon4.svg";
const imgIcon5 = "/assets/figma/7-368/imgIcon5.svg";
const imgIcon6 = "/assets/figma/7-368/imgIcon6.svg";
const imgIcon7 = "/assets/figma/7-368/imgIcon7.svg";
const imgImage8 = "/assets/figma/7-368/imgImage8.png";
const imgImage12 = "/assets/figma/7-368/imgImage12.png";
const imgImage10 = "/assets/figma/7-368/imgImage10.png";
const imgImage6 = "/assets/figma/7-368/imgImage6.png";
const imgImage11 = "/assets/figma/7-368/imgImage11.png";
const imgImage5 = "/assets/figma/7-368/imgImage5.png";
const imgFrame2121453181 = "/assets/figma/7-368/imgFrame2121453181.png";
const imgImage13 = "/assets/figma/7-368/imgImage13.png";
const imgLine1 = "/assets/figma/7-368/imgLine1.svg";
const imgCardSlash = "/assets/figma/7-368/imgCardSlash.svg";
const imgGoogle = "/assets/figma/7-368/imgGoogle.svg";
const imgTwitch = "/assets/figma/7-368/imgTwitch.svg";
const imgInstagram = "/assets/figma/7-368/imgInstagram.svg";
const imgTickCircle = "/assets/figma/7-368/imgTickCircle.svg";
const imgTickCircle1 = "/assets/figma/7-368/imgTickCircle1.svg";
const imgVector6 = "/assets/figma/7-368/imgVector6.svg";
const imgGroup4 = "/assets/figma/7-368/imgGroup4.svg";
const imgIcon10 = "/assets/figma/7-368/imgIcon10.svg";
const imgIcon11 = "/assets/figma/7-368/imgIcon11.svg";
const imgIcon12 = "/assets/figma/7-368/imgIcon12.svg";
const imgIcon13 = "/assets/figma/7-368/imgIcon13.svg";

function OutlineInterfaceCheck({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Outline/Interface/Check" data-node-id="45:436">
      <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="45:437">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
      </div>
    </div>
  );
}

function SolidFilesCopy({ className }: { className?: string }) {
  return (
    <div className={className || "aspect-[24/24] relative w-[25px]"} data-name="Solid/Files/Copy" data-node-id="8:478">
      <div className="absolute inset-[13.54%_14.73%_14.67%_13.54%]" data-name="Icon" data-node-id="8:479">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
      </div>
    </div>
  );
}

function SolidGeneralClock({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Solid/General/Clock" data-node-id="29:253">
      <div className="absolute inset-[14.58%]" data-name="Icon" data-node-id="29:254">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon2} />
      </div>
    </div>
  );
}

function SolidInterfaceCaretRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Solid/Interface/Caret right" data-node-id="16:571">
      <div className="absolute inset-[30.21%_36.46%_30.21%_40.63%]" data-name="Icon" data-node-id="16:572">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon3} />
      </div>
    </div>
  );
}

function SocialMediaTelegram({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Telegram" data-node-id="3:80">
      <div className="absolute bg-[#34aadf] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:81" />
      <div className="absolute bottom-[29.74%] left-1/4 right-[29%] top-[31.23%]" data-name="Vector" data-node-id="3:82">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function SpeechBalloon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="Speech Balloon" data-node-id="1:19">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSpeechBalloon} />
    </div>
  );
}

function SocialMediaVimeo({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Vimeo" data-node-id="3:64">
      <div className="absolute bg-[#32b8e8] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:65" />
      <div className="absolute inset-[30.9%_25.22%_29.26%_26.09%]" data-name="Group" data-node-id="3:66">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
      </div>
    </div>
  );
}

function SocialMediaSoundcloud({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Soundcloud" data-node-id="3:57">
      <div className="absolute inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:58" style={{ backgroundImage: "linear-gradient(-1.2189517934166219deg, rgb(255, 67, 58) 1.8455%, rgb(255, 148, 54) 99.39%)" }} />
      <div className="absolute inset-[35.59%_15.92%_34.39%_15%]" data-name="Vector" data-node-id="3:59">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
      </div>
    </div>
  );
}

function SocialMediaTwitch({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Twitch" data-node-id="3:68">
      <div className="absolute bg-[#9146ff] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:69" />
      <div className="absolute inset-[35.25%_36.38%_33.82%_34.78%]" data-name="Vector" data-node-id="3:70">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
      </div>
      <div className="absolute inset-[26.55%_28.49%_26.64%_28.26%]" data-name="Group" data-node-id="3:71">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
      </div>
    </div>
  );
}

function SocialMediaReddit({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Reddit" data-node-id="3:88">
      <div className="absolute bg-[#ff4500] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:89" />
      <div className="absolute bottom-[27.85%] left-1/4 right-1/4 top-[28.11%]" data-node-id="3:90">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup3} />
      </div>
    </div>
  );
}

function SocialMediaVkontakte({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Vkontakte" data-node-id="3:54">
      <div className="absolute bg-[#2787f5] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:55" />
      <div className="absolute inset-[33.31%_19.43%_32.82%_19.78%]" data-name="path4" data-node-id="3:56">
        <img alt="" className="absolute block max-w-none size-full" src={imgPath4} />
      </div>
    </div>
  );
}

function SocialMediaLinkedin({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Linkedin" data-node-id="3:83">
      <div className="absolute bg-[#069] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:84" />
      <div className="absolute inset-[30.23%_29.16%_29.74%_29%]" data-name="Group" data-node-id="3:85">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
      </div>
    </div>
  );
}

function SocialMediaInstagram({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Instagram" data-node-id="3:107">
      <div className="absolute inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:108" style={{ backgroundImage: "linear-gradient(-45deg, rgb(251, 225, 138) 0.96099%, rgb(252, 187, 69) 21.961%, rgb(247, 82, 116) 38.961%, rgb(213, 54, 146) 52.961%, rgb(143, 57, 206) 74.961%, rgb(91, 79, 233) 100.96%)" }} />
      <div className="absolute bottom-[24.85%] left-1/4 right-[24.97%] top-[25.11%]" data-node-id="3:109">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup15} />
      </div>
    </div>
  );
}

function SocialMediaSnapchat({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Snapchat" data-node-id="3:60">
      <div className="absolute bg-[#fff853] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:61" />
      <div className="absolute inset-[27.3%_25.45%_27.04%_25.12%]" data-node-id="3:62">
        <img alt="" className="absolute block h-full max-w-none object-contain w-full" src={imgVector3} />
      </div>
      <div className="absolute inset-[26.21%_23.92%_25.81%_24.03%]" data-name="Vector" data-node-id="3:63">
        <img alt="" className="absolute block h-full max-w-none object-contain w-full" src={imgVector4} />
      </div>
    </div>
  );
}

function SocialMediaFacebook({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Facebook" data-node-id="3:112">
      <div className="absolute bg-[#337fff] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:113" />
      <div className="absolute contents inset-[25.11%_35.93%_24.85%_37%]" data-name="Capa 2" data-node-id="3:114">
        <div className="absolute inset-[25.11%_35.93%_24.85%_37%]" data-name="ELEMENTS" data-node-id="3:115">
          <img alt="" className="absolute block max-w-none size-full" src={imgElements} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaTikTok({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Tik Tok" data-node-id="3:95">
      <div className="absolute bg-black inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:96" />
      <div className="absolute contents inset-[25.11%_27.73%_24.81%_28%]" data-name="Capa 2" data-node-id="3:97">
        <div className="absolute inset-[25.11%_27.73%_24.81%_28%]" data-name="ELEMENTS" data-node-id="3:98">
          <img alt="" className="absolute block max-w-none size-full" src={imgElements1} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaTwitter({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Twitter" data-node-id="3:102">
      <div className="absolute bg-[#3cf] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:103" />
      <div className="absolute contents inset-[29.11%_24.95%_28.78%_24%]" data-name="Capa 2" data-node-id="3:104">
        <div className="absolute inset-[29.11%_24.95%_28.78%_24%]" data-name="ELEMENTS" data-node-id="3:105">
          <img alt="" className="absolute block max-w-none size-full" src={imgElements2} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaPinterest({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="Social Media / Pinterest" data-node-id="3:92">
      <div className="absolute bg-[red] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="3:93" />
      <div className="absolute inset-[25.11%_31%_24.85%_31%]" data-name="Vector" data-node-id="3:94">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
      </div>
    </div>
  );
}

function OutlineStatusLock({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[60px]"} data-name="Outline/Status/Lock" data-node-id="51:689">
      <div className="absolute inset-[9.49%_18.83%_9.96%_18.83%]" data-name="Icon" data-node-id="51:690">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon4} />
      </div>
    </div>
  );
}

function OutlineStatusLightningAlt({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[60px]"} data-name="Outline/Status/Lightning-alt" data-node-id="51:686">
      <div className="absolute inset-[9.37%_21.88%_9.37%_17.71%]" data-name="Icon" data-node-id="51:687">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon5} />
      </div>
    </div>
  );
}

function SolidFilesDownload({ className }: { className?: string }) {
  return (
    <div className={className || "aspect-[24/24] relative w-[25px]"} data-name="Solid/Files/Download" data-node-id="8:484">
      <div className="absolute inset-[15.63%_17.71%_13.54%_17.71%]" data-name="Icon" data-node-id="8:485">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon6} />
      </div>
    </div>
  );
}

function SolidFilesClipboardAlt({ className }: { className?: string }) {
  return (
    <div className={className || "aspect-[24/24] relative w-[25px]"} data-name="Solid/Files/Clipboard-alt" data-node-id="8:481">
      <div className="absolute inset-[9.38%_18.75%_7.41%_18.75%]" data-name="Icon" data-node-id="8:482">
        <img alt="" className="absolute block max-w-none size-full" src={imgIcon7} />
      </div>
    </div>
  );
}

export default function Desktop() {
  const router = useRouter();
  const [inputError, setInputError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const faqItems = [
    {
      question: "Is this social media downloader free to use?",
      answer:
        "Yes, our platform is completely free to use. You can download videos, photos, reels, and other content from multiple social media platforms without paying any fees or purchasing a subscription. There are no hidden charges, and you can enjoy unlimited downloads anytime.",
    },
    {
      question: "Do I need to create an account to download content?",
      answer:
        "No account is required. You can paste your link and download directly without signing up or sharing personal information.",
    },
    {
      question: "Is it safe to use this downloader?",
      answer:
        "Yes. We do not ask for login credentials and we do not store your download links or history, so your activity stays private.",
    },
    {
      question: "What platforms are supported?",
      answer:
        "The platform supports a wide range of social media sources including short video, photo, and post-based platforms, all in one place.",
    },
    {
      question: "Can I download content in high quality?",
      answer:
        "Yes. When high-quality options are available from the source, you can choose and download the best quality provided.",
    },
    {
      question: "Why is my download not working?",
      answer:
        "This usually happens when a link is private, restricted, expired, or temporarily unavailable. Recheck the link and try again.",
    },
  ];

  const comparisonRows = [
    { feature: "Cost to Use", brand: "100% Free", other: "Subscription or hidden fees" },
    { feature: "Supported Platforms", brand: "22 Platforms", other: "Limited platforms" },
    { feature: "Download Categories", brand: "All Content Types Available", other: "Limited options" },
    { feature: "Download Speed", brand: "Fast Processing", other: "Slower or inconsistent" },
    { feature: "Reliability", brand: "High Success Rate", other: "Download failures possible" },
  ];

  const handleLandingSubmit = (url: string) => {
    const slug = detectPlatformSlugFromUrl(url);
    if (!slug) {
      setInputError("Unsupported link. Please paste a supported platform URL.");
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
              Download Anything from Your Favorite Social Platforms
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] sm:leading-[28px] relative shrink-0 text-[#404040] text-[16px] sm:text-[20px] w-full max-w-[431px]">
              Access high-quality downloads from multiple platforms by simply pasting your URL.
            </p>
          </div>
          <div className="w-full flex justify-center px-2">
            <UrlInput onSubmit={handleLandingSubmit} />
          </div>
          <div className="bg-[#f8f8f8] border border-[#e5e5e5] content-stretch flex items-center justify-center h-auto min-h-[200px] md:h-[293px] relative rounded-[16px] shrink-0 w-full max-w-[620px] aspect-video md:aspect-auto">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic text-[#aaaaaa] text-[16px] text-center w-[332px]">
              After the link is pasted it will showcase here what the user is downloading
            </p>
          </div>
          {inputError && (
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d14343] text-[14px] text-center">
              {inputError}
            </p>
          )}
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1068px]" data-node-id="8:503">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full max-w-[855px] px-4" data-node-id="7:370">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.25rem,4vw,1.5rem)] w-full" data-node-id="7:371">
              Download in 3 Simple Steps
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[340px]" data-node-id="7:372">
              Follow a few quick steps to download your favorite content directly to your device.
            </p>
          </div>
          <div className="hidden lg:flex content-stretch gap-[14px] items-center justify-center relative shrink-0" data-node-id="8:500">
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="8:497">
              <div className="bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[31px] shrink-0 w-[40px]" data-node-id="8:488">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] whitespace-nowrap" data-node-id="8:487">
                  1
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(155,150,167,0.25)]" />
              </div>
              <div className="h-0 relative shrink-0 w-[296px]" data-node-id="8:493">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="8:499">
              <div className="bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[31px] shrink-0 w-[40px]" data-node-id="8:489">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] whitespace-nowrap" data-node-id="8:490">
                  2
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(155,150,167,0.25)]" />
              </div>
              <div className="h-0 relative shrink-0 w-[296px]" data-node-id="8:494">
                <div className="absolute inset-[-2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[31px] shrink-0 w-[40px]" data-node-id="8:491">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] whitespace-nowrap" data-node-id="8:492">
                3
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(155,150,167,0.25)]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] items-stretch lg:items-start justify-center relative shrink-0 w-full px-4 lg:px-0" data-node-id="8:376">
            <div className="bg-white content-stretch flex flex-col gap-[20px] items-start justify-center px-[24px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="8:377">
              <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[48px]" data-name="vuesax/linear/sun" data-node-id="8:378">
                <SolidFilesCopy className="relative shrink-0 size-[25px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-node-id="8:394">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#404040] text-[16px] w-full" data-node-id="8:395">
                  Copy the Link
                </p>
                <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#606060] text-[15px] w-full" data-node-id="8:396">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Open your preferred social media platform.</span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Find the content you want to download.</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="leading-[24px]">Copy the URL from the share option.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[20px] items-start justify-center px-[24px] lg:px-[40px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="8:397">
              <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[48px]" data-name="vuesax/linear/sun" data-node-id="8:438">
                <SolidFilesClipboardAlt className="relative shrink-0 size-[25px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-node-id="8:414">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#404040] text-[16px] w-full" data-node-id="8:415">
                  Paste the Link
                </p>
                <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#606060] text-[15px] w-full" data-node-id="8:416">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Paste the copied link into the input field</span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Click the download button</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="leading-[24px]">Wait a few seconds for processing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[20px] items-start justify-center px-[24px] lg:px-[40px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="8:417">
              <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[48px]" data-name="vuesax/linear/sun" data-node-id="8:455">
                <SolidFilesDownload className="relative shrink-0 size-[25px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-node-id="8:434">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#404040] text-[16px] w-full" data-node-id="8:435">
                  Download Instantly
                </p>
                <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#606060] text-[15px] w-full" data-node-id="8:436">
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Preview the available formats or quality options</span>
                  </li>
                  <li className="mb-0 ms-[22.5px]">
                    <span className="leading-[24px]">Select your preferred version</span>
                  </li>
                  <li className="ms-[22.5px]">
                    <span className="leading-[24px]">Save the file directly to your device</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1155px] px-4 lg:px-0" data-node-id="10:349">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full max-w-[855px]" data-node-id="10:72">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.25rem,4vw,1.5rem)] w-full" data-node-id="10:73">
              Our Platform Overview
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[519px]" data-node-id="10:77">
              Save your favorite online media in seconds with a fast, efficient, and easy-to-use downloader that works across multiple platforms.
            </p>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[155px] items-center justify-center relative shrink-0 w-full" data-node-id="10:93">
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[28px] not-italic relative shrink-0 text-[#404040] text-[16px] w-full lg:w-[612px]" data-node-id="10:76">
              <p className="relative shrink-0 w-full" data-node-id="10:74">
                Our platform is an all-in-one social media downloader designed to help users save their favorite online content quickly and effortlessly. Whether you want to download videos, reels, photos, carousels, or posts, our tool makes the process simple by allowing you to paste a link and get instant results in high quality.
              </p>
              <p className="relative shrink-0 w-full" data-node-id="10:75">
                We focus on delivering a fast, user-friendly, and reliable downloading experience across multiple platforms, ensuring compatibility with different devices including smartphones, tablets, and desktops. With advanced processing technology, users can enjoy smooth performance, unlimited downloads, and high-speed conversions without unnecessary steps or complications.
              </p>
            </div>
            <div className="flex flex-row items-center self-stretch w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-4 lg:gap-5 w-full lg:flex lg:flex-row" data-node-id="10:92">
                <div className="contents lg:flex lg:flex-col lg:gap-[20px] lg:h-full lg:items-center lg:justify-center" data-node-id="10:90">
                  <div className="bg-[#ece8f5] content-stretch flex flex-col gap-[8px] items-start justify-center p-4 lg:p-[20px] relative rounded-[12px] w-full lg:w-[184px]" data-node-id="10:80">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2d2d2d] text-[clamp(1.5rem,5vw,2.5rem)]" data-node-id="10:79">
                      200k+
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-black" data-node-id="10:78">
                      Happy users
                    </p>
                  </div>
                  <div className="bg-[#ece8f5] content-stretch flex flex-col gap-[8px] items-start justify-center p-4 lg:p-[20px] relative rounded-[12px] w-full lg:w-[184px]" data-node-id="10:84">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2d2d2d] text-[clamp(1.5rem,5vw,2.5rem)]" data-node-id="10:85">
                      99%
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-black" data-node-id="10:86">
                      Success Rate
                    </p>
                  </div>
                </div>
                <div className="contents lg:flex lg:flex-col lg:gap-[20px] lg:h-full lg:items-center lg:justify-center" data-node-id="10:91">
                  <div className="bg-[#ece8f5] content-stretch flex flex-col gap-[8px] items-start justify-center p-4 lg:p-[20px] relative rounded-[12px] w-full lg:w-[184px]" data-node-id="10:81">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2d2d2d] text-[clamp(1.5rem,5vw,2.5rem)]" data-node-id="10:82">
                      3M+
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-black" data-node-id="10:83">
                      Files Downloaded
                    </p>
                  </div>
                  <div className="bg-[#ece8f5] content-stretch flex flex-col gap-[8px] items-start justify-center p-4 lg:p-[20px] relative rounded-[12px] w-full lg:w-[184px]" data-node-id="10:87">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2d2d2d] text-[clamp(1.5rem,5vw,2.5rem)]" data-node-id="10:88">
                      120+
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-black" data-node-id="10:89">
                      Countries Reached
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full max-w-[1312px] px-4 lg:px-0" data-name="Section" data-node-id="16:188">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="16:447">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.25rem,4vw,1.5rem)]" data-node-id="16:448">
              Why Choose Us
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[614px]" data-node-id="16:449">
              We provide a fast, secure, and user-friendly platform designed to make downloading content from multiple social media platforms simple and reliable.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="16:562">
            <div className="content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[20px] h-auto lg:h-[307px] items-stretch lg:items-start justify-center relative shrink-0 w-full" data-node-id="16:517">
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-px min-w-px px-[20px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)]" data-node-id="16:518">
                <OutlineStatusLightningAlt className="relative shrink-0 size-[60px]" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="16:521">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="16:540">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center" data-node-id="16:522">
                      Fast and Efficient Downloads
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] text-center w-full" data-node-id="16:523">
                    Our platform is optimized for speed, allowing you to download videos, photos, and other content within seconds without unnecessary delays or complicated steps.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-px min-w-px px-[20px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)]" data-node-id="16:524">
                <OutlineStatusLock className="relative shrink-0 size-[60px]" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="16:527">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="16:541">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center" data-node-id="16:528">
                      Secure and Private Experience
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] text-center w-full" data-node-id="16:529">
                    We prioritize your privacy by ensuring that your links and activity are not stored or tracked, giving you a safe environment you can trust every time you use the service.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-px min-w-px px-[20px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)]" data-node-id="16:530">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/card-slash" data-node-id="51:692">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="card-slash" data-node-id="51:693">
                    <img alt="" className="absolute block max-w-none size-full" src={imgCardSlash} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="16:533">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="16:542">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center" data-node-id="16:534">
                      Completely Free Access
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] text-center w-full" data-node-id="16:535">
                    Enjoy unlimited downloads without subscriptions, hidden charges, or premium restrictions, making the platform accessible to everyone whenever they need it.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-px min-w-px px-[20px] py-[24px] relative rounded-[16px] self-stretch shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)]" data-node-id="51:681">
                <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0" data-node-id="51:722">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="vuesax/linear/google" data-node-id="51:723">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="google" data-node-id="51:724">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGoogle} />
                    </div>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="vuesax/linear/twitch" data-node-id="51:728">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="twitch" data-node-id="51:729">
                      <img alt="" className="absolute block max-w-none size-full" src={imgTwitch} />
                    </div>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="vuesax/linear/instagram" data-node-id="51:735">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="instagram" data-node-id="51:736">
                      <img alt="" className="absolute block max-w-none size-full" src={imgInstagram} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:682">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:683">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px] text-center" data-node-id="51:684">
                      Multiple Platforms in One Place
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] text-center w-full" data-node-id="51:685">
                    Download content from a wide range of social media platforms using a single tool, eliminating the need to switch between different websites or applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full px-4 lg:px-0" data-node-id="50:461">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="50:462">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)]" data-node-id="50:463">
              More Reasons to Choose Our Platform
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[614px]" data-node-id="50:464">
              Discover additional advantages that make our platform a reliable and convenient choice for downloading content from multiple social media platforms.
            </p>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-start relative shrink-0 w-full" data-node-id="50:551">
            <div className="content-stretch flex items-center relative shrink-0 w-full lg:w-[604px]" data-node-id="50:465">
              <div className="content-stretch flex flex-col gap-[20px] items-start min-w-0 relative w-full" data-node-id="50:466">
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:467">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:555">
                    01
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:470">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="50:471">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px]" data-node-id="50:472">
                        Smooth and Hassle-Free Experience
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:473">
                      Our platform is designed to keep the process simple, allowing you to download content quickly without complicated steps, technical knowledge, or unnecessary interruptions.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:517">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:556">
                    02
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:520">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="50:521">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px]" data-node-id="50:522">
                        Safe and Trustworthy Environment
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:523">
                      We prioritize user safety by ensuring secure processing and maintaining transparency, so you can use the service confidently without concerns about privacy or risks.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:474">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:558">
                    03
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:477">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="50:478">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="50:479">
                        Consistent Performance You Can Rely On
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:480">
                      With optimized technology and stable performance, you can expect dependable results every time you download content, regardless of the platform or device you use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full lg:w-[604px]" data-node-id="50:525">
              <div className="content-stretch flex flex-col gap-[20px] items-start min-w-0 relative w-full" data-node-id="50:526">
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:527">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:562">
                    04
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:530">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="50:531">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px]" data-node-id="50:532">
                        Wide Platform Coverage
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:533">
                      Access downloads from a large number of social media platforms in one place, giving you flexibility without needing multiple tools or websites.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:534">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:560">
                    05
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:537">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="50:538">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px]" data-node-id="50:539">
                        No Limits or Restrictions
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:540">
                      Enjoy the freedom to download content whenever you want, without daily limits, subscriptions, or locked features that interrupt your experience.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start px-[16px] md:px-[24px] py-4 relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="50:541">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#c1b5db] text-[24px]" data-node-id="50:564">
                    06
                  </p>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0" data-node-id="50:544">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="50:545">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="50:546">
                        Accessible Anytime, Anywhere
                      </p>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="50:547">
                      Whether you are at home, at work, or on the move, you can rely on our platform to work smoothly across devices with consistent performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full px-4 lg:px-0" data-node-id="12:454">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center" data-node-id="12:455">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1rem,4vw,1.5rem)]" data-node-id="12:456">
              Why Choose Our Free Social Media Downloader
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[570px]" data-node-id="12:457">
              See how our platform stands out with faster speeds, more supported platforms, and a secure experience without hidden costs or data tracking.
            </p>
          </div>
          <div className="w-full">
            <div className="w-full max-w-[880px] mx-auto border border-[#d1d3d9] rounded-[12px] overflow-hidden bg-white">
              <div className="grid grid-cols-3 min-h-[48px] bg-[#f7f7f7] border-b border-[#d1d3d9]">
                <div className="px-4 flex items-center">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#404040] text-[14px]">Features</p>
                </div>
                <div className="px-4 flex items-center justify-center bg-[#f7f4fe] border-x-2 border-t-2 border-[#6f40dd] rounded-tl-[12px] rounded-tr-[12px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#404040] text-[14px] text-center">Brand Name</p>
                </div>
                <div className="px-2 sm:px-4 flex items-center justify-center">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#404040] text-[14px] text-center">Other Downloaders</p>
                </div>
              </div>

              {comparisonRows.map((row, index) => {
                const isLast = index === comparisonRows.length - 1;
                return (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 min-h-[110px] md:min-h-[80px] border-[#d1d3d9] ${isLast ? "" : "border-b"}`}
                  >
                    <div className="px-3 sm:px-4 flex items-start md:items-center pt-4 md:pt-0">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#404040] text-[14px] leading-[20px]">
                        {row.feature}
                      </p>
                    </div>

                    <div
                      className={`px-3 sm:px-4 bg-[#f7f4fe] border-x-2 border-[#6f40dd] flex items-center justify-center ${isLast ? "border-b-2 rounded-bl-[12px] rounded-br-[12px]" : ""}`}
                    >
                      <div className="w-full max-w-[100px] flex items-center gap-2">
                        <span className="size-[16px] shrink-0" aria-hidden>
                          <svg viewBox="0 0 16 16" className="block size-[16px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="6.667" fill="#44AD57" />
                            <path d="M5.2 8L7.05 9.85L10.8 6.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#606060] text-[14px] leading-[20px] break-words">
                          {row.brand}
                        </p>
                      </div>
                    </div>

                    <div className="px-2 sm:px-4 flex items-center justify-center">
                      <div className="w-full max-w-[100px] flex items-center gap-2">
                        <span className="size-[16px] shrink-0" aria-hidden>
                          <svg viewBox="0 0 16 16" className="block size-[16px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="6.667" fill="#D43838" />
                            <path d="M6.33 6L10.33 10M10.33 6L6.33 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#606060] text-[14px] leading-[20px] break-words">
                          {row.other}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1280px] px-4 lg:px-0" data-node-id="10:348">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="10:94">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)]" data-node-id="10:95">
              All Your Favorite Platforms in One Place
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[457px]" data-node-id="10:96">
              Access a wide range of social media download options with a single tool designed for convenience and flexibility.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="10:347">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-4 md:gap-6 w-full" data-node-id="10:345">
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:245">
                <SocialMediaPinterest className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:247">
                  Pinterest
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:239">
                <SocialMediaTwitter className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:241">
                  Twitter
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:233">
                <SocialMediaTikTok className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:235">
                  Tiktok
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:227">
                <div className="relative shrink-0 size-[24px]" data-name="Social Media / Youtube" data-node-id="10:228">
                  <div className="absolute bg-[red] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="I10:228;3:78" />
                  <div className="absolute inset-[30%_21%_30%_22%]" data-name="Vector" data-node-id="I10:228;3:79">
                    <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:229">
                  Youtube
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:224">
                <SocialMediaFacebook className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:226">
                  Facebook
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:236">
                <SocialMediaSnapchat className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:238">
                  Snapchat
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:230">
                <SocialMediaInstagram className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:232">
                  Instagram
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:242">
                <SocialMediaLinkedin className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:244">
                  Linkedin
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:255">
                <SocialMediaVkontakte className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:257">
                  VKontakte
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:267">
                <SocialMediaReddit className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:269">
                  Reddit
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:264">
                <div className="relative rounded-[66px] shrink-0 size-[24px]" data-name="image 8" data-node-id="10:265">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[66px] size-full" src={imgImage8} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:266">
                  Threads
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:249">
                <SocialMediaTwitch className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:251">
                  Twitch
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:270">
                <div className="relative shrink-0 size-[24px]" data-name="Social Media / Tumbler" data-node-id="10:271">
                  <div className="absolute bg-[#242424] inset-0 rounded-[50px]" data-name="Logo Container" data-node-id="I10:271;3:51" />
                  <div className="absolute inset-[25.81%_36.26%_24.14%_35%]" data-name="Group" data-node-id="I10:271;3:52">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:272">
                  Tumblr
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:258">
                <SocialMediaSoundcloud className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:260">
                  Sound cloud
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:252">
                <SocialMediaVimeo className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:254">
                  Vimeo
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:289">
                <SpeechBalloon className="relative shrink-0 size-[20px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:291">
                  SlideServe
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:283">
                <div className="relative rounded-[300px] shrink-0 size-[24px]" data-name="image 12" data-node-id="10:284">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[300px] size-full" src={imgImage12} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:285">
                  Calameo
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:274">
                <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="image 10" data-node-id="10:275">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[100px] size-full" src={imgImage10} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:276">
                  Scribd
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:277">
                <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="image 6" data-node-id="10:278">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[100px] size-full" src={imgImage6} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:279">
                  SlideShare
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:286">
                <div className="h-[23px] relative rounded-[100px] shrink-0 w-[24px]" data-name="image 11" data-node-id="10:287">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[100px] size-full" src={imgImage11} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:288">
                  Yumpu
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:280">
                <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="image 5" data-node-id="10:281">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[100px] size-full" src={imgImage5} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:282">
                  Issuu
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] min-h-[50px] items-center justify-center relative w-full" data-node-id="10:261">
                <SocialMediaTelegram className="relative shrink-0 size-[24px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[12px] md:text-[14px] text-center whitespace-nowrap" data-node-id="10:263">
                  Telegram
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1155px] px-4 lg:px-0" data-node-id="50:611">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full max-w-[855px]" data-node-id="50:612">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.125rem,4vw,1.5rem)] w-full" data-node-id="50:613">
              Our Purpose
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[660px]" data-node-id="50:614">
              Making content downloads simple, accessible, and reliable for everyone, everywhere.
            </p>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[155px] items-center justify-center relative shrink-0 w-full" data-node-id="50:615">
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[28px] not-italic relative shrink-0 text-[#404040] text-[16px] w-full lg:w-[612px]" data-node-id="50:616">
              <p className="relative shrink-0 w-full" data-node-id="50:617">
                Our purpose is to provide users with a fast, convenient, and trustworthy way to download content from multiple social media platforms without complications. We aim to remove barriers such as subscriptions, technical complexity, and privacy concerns by offering a solution that is easy to use and accessible to everyone. By focusing on speed, simplicity, and security, we strive to create a platform that people can rely on whenever they need quick access to their favorite online content.
              </p>
              <p className="relative shrink-0 w-full" data-node-id="50:618">
                We are committed to delivering consistent performance, high-quality results, and a secure environment where users can feel confident while downloading content. Our goal is not only to provide a useful tool but also to build a reliable solution that people can depend on whenever they need quick access to their favorite media. Through continuous improvement and user-focused innovation, we aim to make the downloading experience smoother, faster, and more accessible for users around the world.
              </p>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-node-id="50:619">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-node-id="50:620">
                  <div className="aspect-[388/363] relative rounded-[12px] shrink-0 w-full" data-node-id="50:621">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <img alt="" className="absolute h-[152.7%] left-[-0.13%] max-w-none top-[-31.31%] w-full" src={imgFrame2121453181} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full max-w-[1064px] px-4 lg:px-0" data-name="Section" data-node-id="51:643">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="51:644">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.125rem,4vw,1.5rem)]" data-node-id="51:645">
              Powerful Features for Fast and Easy Downloads
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[614px]" data-node-id="51:646">
              Everything you need to download content from multiple social media platforms in one place - free, secure, and designed for a smooth user experience.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="51:647">
            <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-stretch lg:items-start justify-center relative shrink-0 w-full" data-node-id="51:648">
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:649">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:650">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:651">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:652">
                      Fast Processing
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:653">
                    Download videos, photos, reels, and posts within seconds using our high-speed processing technology.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:654">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:655">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:656">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:657">
                      22+ Supported Platforms
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:658">
                    Access a wide range of social media platforms without switching tools. One platform handles everything.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:659">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:660">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:661">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:662">
                      No Login Required
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:663">
                    Start downloading instantly without creating an account or sharing personal information.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-stretch lg:items-start justify-center relative shrink-0 w-full" data-node-id="51:664">
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:665">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:666">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:667">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:668">
                      Completely Free to Use
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:669">
                    Enjoy unlimited downloads with no subscriptions, hidden fees, or premium restrictions.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:670">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:671">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:672">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:673">
                      Secure and Private
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:674">
                    Your links and activity are never stored or tracked, ensuring a safe and confidential experience.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col h-auto lg:h-[178px] items-start justify-center px-[20px] lg:px-[40px] py-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:w-[340px]" data-node-id="51:675">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="51:676">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="51:677">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="51:678">
                      Unlimited Downloads
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="51:679">
                    Download as much content as you want without limits or daily restrictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f3fb] border border-[#cfcfe4] border-solid h-auto lg:h-[398px] overflow-clip relative rounded-[24px] shrink-0 w-full max-w-[1320px] p-6 lg:p-0" data-node-id="16:563">
          <div className="lg:absolute content-stretch flex flex-col gap-[20px] items-start justify-center lg:left-[39.5px] not-italic lg:top-[39.5px] mb-6 lg:mb-0" data-node-id="16:564">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)] lg:text-center" data-node-id="16:565">
              Why you can trust this platform
            </p>
            <div className="font-['Inter:Medium',sans-serif] font-medium leading-[27px] relative shrink-0 text-[#505050] text-[16px] w-full lg:w-[614px]" data-node-id="16:566">
              <p className="mb-0">Our platform is built to provide a seamless experience for downloading content from multiple social media platforms quickly and securely. We focus on speed, simplicity, and user privacy - so you can download what you need without complications or concerns.</p>
              <p>We do not require login credentials, we do not store your links, and we do not track your downloads. Every process is designed to keep your activity private while delivering high-quality results in seconds.</p>
            </div>
          </div>
          <div className="lg:absolute bg-[#6f40dd] content-stretch flex gap-[4px] items-center justify-center lg:left-[39.5px] px-[16px] py-[8px] rounded-[33px] lg:top-[317.5px] mb-6 lg:mb-0" data-node-id="6:350">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="6:351">
              Learn more about privacy
            </p>
            <SolidInterfaceCaretRight className="relative shrink-0 size-[24px]" />
          </div>
          <div className="lg:absolute content-stretch flex flex-col gap-[20px] items-start justify-center lg:left-[853.5px] p-[8px] lg:top-[39.5px] w-full lg:w-[288px]" data-node-id="16:581">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:574">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:575">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:576">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:580">
                No Login Required
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:582">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:583">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:584">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:588">
                No Data Stored
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:589">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:590">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:591">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:595">
                Secure Processing
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:596">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:597">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:598">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:602">
                Unlimited Downloads
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:617">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:618">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:619">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:623">
                No Hidden Charges
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:624">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:625">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:626">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:630">
                Safe and Private Experience
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:610">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:611">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:612">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:616">
                Trusted by Thousands of Users
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="16:603">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/tick-circle" data-node-id="16:604">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="tick-circle" data-node-id="16:605">
                  <img alt="" className="absolute block max-w-none size-full" src={imgTickCircle} />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#505050] text-[16px] whitespace-nowrap" data-node-id="16:609">
                Works Across Multiple Platforms
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1130px] px-4 lg:px-0" data-node-id="29:262">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="27:725">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.125rem,4vw,1.5rem)]" data-node-id="27:726">
              Benefits That Make Downloading Easier
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[660px]" data-node-id="27:727">
              Enjoy a faster, simpler, and more reliable way to download content from multiple social media platforms with a solution designed around your convenience and privacy.
            </p>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-stretch lg:items-center relative shrink-0 w-full" data-node-id="29:261">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full lg:w-[340px]" data-node-id="29:259">
              <div className="bg-white content-stretch flex flex-col gap-[20px] h-auto lg:h-[340px] items-start justify-center p-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="27:730">
                <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[40px]" data-name="vuesax/linear/sun" data-node-id="29:225">
                  <SolidGeneralClock className="relative shrink-0 size-[24px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="27:731">
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="27:732">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap" data-node-id="27:733">
                      Save Time with Instant Downloads
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="27:734">
                    Our platform is optimized for speed, allowing you to download content within seconds without complicated steps or delays. This means you can quickly access the media you need without wasting time navigating multiple tools or waiting for slow processing.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[20px] h-auto lg:h-[340px] items-start justify-center p-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="27:746">
                <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[40px]" data-name="vuesax/linear/sun" data-node-id="29:229">
                  <div className="relative shrink-0 size-[25px]" data-name="Solid/Files/Copy" data-node-id="29:230">
                    <div className="absolute inset-[13.54%_14.73%_14.67%_13.54%]" data-name="Icon" data-node-id="I29:230;8:479">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="27:747">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="27:748">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="27:749">
                      Enjoy Unlimited Access Without Restrictions
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="27:750">
                    You can download as much content as you want without facing daily limits, subscriptions, or hidden fees. This flexibility ensures that both casual users and frequent downloaders can rely on the platform whenever they need it.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[20px] h-auto lg:h-[700px] items-start p-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full lg:flex-1" data-node-id="27:735">
              <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[40px]" data-name="vuesax/linear/sun" data-node-id="29:249">
                <div className="relative shrink-0 size-[25px]" data-name="Solid/Files/Copy" data-node-id="29:250">
                  <div className="absolute inset-[13.54%_14.73%_14.67%_13.54%]" data-name="Icon" data-node-id="I29:250;8:479">
                    <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="27:736">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="27:737">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap" data-node-id="27:738">
                    Download Anytime on Any Device
                  </p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="27:739">
                  Our platform works smoothly across smartphones, tablets, and desktop devices, giving you the freedom to download content wherever you are. Whether you are at home or on the go, you can rely on the same fast and easy experience.
                </p>
              </div>
              <div className="h-auto lg:h-[393px] relative rounded-[20px] shrink-0 w-full lg:w-[362px] aspect-[362/393] lg:aspect-auto" data-name="image 13" data-node-id="29:257">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-full left-[-15.89%] max-w-none top-0 w-[132.17%]" src={imgImage13} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full lg:w-[340px]" data-node-id="29:260">
              <div className="bg-white content-stretch flex flex-col gap-[20px] h-auto lg:h-[340px] items-start justify-center p-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="27:740">
                <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[40px]" data-name="vuesax/linear/sun" data-node-id="29:241">
                  <div className="relative shrink-0 size-[25px]" data-name="Solid/Files/Copy" data-node-id="29:242">
                    <div className="absolute inset-[13.54%_14.73%_14.67%_13.54%]" data-name="Icon" data-node-id="I29:242;8:479">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="27:741">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="27:742">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="27:743">
                      Stay Secure and Protect Your Privacy
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="27:744">
                    We prioritize your privacy by ensuring that no personal information, download history, or links are stored on our servers. This allows you to use the platform confidently, knowing your activity remains safe and confidential.
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[20px] h-auto lg:h-[340px] items-start justify-center p-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="27:756">
                <div className="bg-[#f2edfe] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[40px]" data-name="vuesax/linear/sun" data-node-id="29:245">
                  <div className="relative shrink-0 size-[25px]" data-name="Solid/Files/Copy" data-node-id="29:246">
                    <div className="absolute inset-[13.54%_14.73%_14.67%_13.54%]" data-name="Icon" data-node-id="I29:246;8:479">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="27:757">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="27:758">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="27:759">
                      Access Multiple Platforms in One Place
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="27:760">
                    Instead of switching between different tools for different platforms, you can manage all your downloads from a single website. This convenience simplifies your workflow and provides a consistent experience across various content sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1228px] px-4 lg:px-0" data-node-id="45:371">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="45:372">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)]" data-node-id="45:373">
              What You Can Expect From Us
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[560px]" data-node-id="45:374">
              We are committed to delivering a seamless downloading experience with speed, reliability, and privacy at the core of everything we offer.
            </p>
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-[20px] items-stretch lg:items-center relative shrink-0 w-full" data-node-id="45:375">
            <div className="content-stretch flex flex-col gap-[20px] items-start min-w-0 relative w-full lg:flex-1" data-node-id="45:376">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:377">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:378">
                  <OutlineInterfaceCheck className="relative shrink-0 size-[24px]" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:380">
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="45:381">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap" data-node-id="45:382">{` Fast and Efficient Performance`}</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:383">
                    Enjoy quick processing speeds that allow you to download content within seconds without unnecessary delays or interruptions.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:384">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:447">
                  <div className="relative shrink-0 size-[24px]" data-name="Outline/Interface/Check" data-node-id="45:448">
                    <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="I45:448;45:437">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:387">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="45:388">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="45:389">
                      Wide Platform Support
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:390">
                    Download content from various social media platforms in one place without switching between different tools or services.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start min-w-0 relative w-full lg:flex-1" data-node-id="45:399">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:400">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:439">
                  <div className="relative shrink-0 size-[24px]" data-name="Outline/Interface/Check" data-node-id="45:440">
                    <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="I45:440;45:437">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:403">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="45:404">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="45:405">{` Strong Privacy Protection`}</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:406">
                    Your links and activity remain private, as we do not store personal data or track your downloads while using the platform.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:407">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:451">
                  <div className="relative shrink-0 size-[24px]" data-name="Outline/Interface/Check" data-node-id="45:452">
                    <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="I45:452;45:437">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:410">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="45:411">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="45:412">
                      Consistent Experience on All Devices
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:413">
                    Use the platform smoothly across mobile phones, tablets, and desktops with a consistent and responsive experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start min-w-0 relative w-full lg:flex-1" data-node-id="45:419">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:420">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:443">
                  <div className="relative shrink-0 size-[24px]" data-name="Outline/Interface/Check" data-node-id="45:444">
                    <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="I45:444;45:437">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:423">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="45:424">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="45:425">
                      Completely Free Access
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:426">
                    Access all features without subscriptions or hidden charges, giving you unlimited downloads whenever you need them.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative rounded-[16px] shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] shrink-0 w-full" data-node-id="45:427">
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[24px]" data-name="vuesax/linear/sun" data-node-id="45:455">
                  <div className="relative shrink-0 size-[24px]" data-name="Outline/Interface/Check" data-node-id="45:456">
                    <div className="absolute inset-[32.29%_23.96%]" data-name="Icon" data-node-id="I45:456;45:437">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="45:430">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="45:431">
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] min-h-px min-w-px not-italic relative text-[#404040] text-[16px]" data-node-id="45:432">
                      Reliable and User-Friendly Design
                    </p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#606060] text-[16px] w-full" data-node-id="45:433">
                    Our interface is designed to be easy to use, ensuring a smooth and dependable experience for both new and returning users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[896px] px-4 lg:px-0" data-node-id="22:139">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="22:140">
            <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-node-id="22:141">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)]" data-node-id="22:142">
                Frequently Asked Questions
              </p>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#404040] text-[16px]" data-node-id="22:143">
                Quick answers to common questions about prompts, access, and usage.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section" data-node-id="22:144">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Primitive.div" data-node-id="22:145">
              {faqItems.map((item, index) => {
                const isOpen = index === openFaqIndex;
                return (
                  <div
                    key={item.question}
                    className={`content-stretch flex flex-col items-start relative shrink-0 w-full border-b border-solid ${isOpen ? "border-[#6f40dd]" : "border-[#ccc]"}`}
                    data-name="Container"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-3 py-4 text-left"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className={`font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[16px] ${isOpen ? "text-[#6f40dd]" : "text-[#1d1d1d]"}`}>
                        {item.question}
                      </span>
                      <span className="relative size-[16px] shrink-0" aria-hidden>
                        <svg
                          viewBox="0 0 16 16"
                          className={`absolute inset-0 size-full transition-transform duration-200 ${isOpen ? "rotate-180 text-[#6f40dd]" : "rotate-0 text-[#1d1d1d]"}`}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${index}`} className="w-full pb-4">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] sm:leading-[40px] text-[#606060] text-[14px] w-full">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#f4f1f8] content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full px-4 lg:px-0" data-node-id="27:679">
          <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full max-w-[563px]" data-node-id="27:680">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[clamp(1.1rem,4vw,1.5rem)]" data-node-id="27:681">
              <p className="leading-[normal]">Help Us Improve</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] relative shrink-0 text-[#404040] text-[16px] w-full max-w-[448px]" data-node-id="27:682">
              Let us know what you love and what we can do better. Your feedback helps us enhance our platform for everyone.
            </p>
          </div>
          <div className="bg-[#ece8f5] content-stretch flex flex-col gap-[40px] items-center overflow-clip px-4 lg:px-[24px] py-[40px] relative rounded-[20px] shrink-0 w-full max-w-[660px]" data-node-id="27:684">
            <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d2d2d] text-[20px] text-center" data-node-id="27:685">
              Leave a Review
            </p>
            <div className="w-full flex flex-col gap-5" data-node-id="27:686">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full" data-node-id="27:689">
                <label className="w-full flex flex-col gap-2" data-node-id="27:690">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[#606060] text-[14px] leading-[20px]">Your Name*</span>
                  <input
                    type="text"
                    className="w-full h-12 rounded-[8px] bg-white border border-[#d1d3d9] px-3 text-[#404040] text-[14px] outline-none"
                    placeholder=""
                    aria-label="Your Name"
                    data-node-id="27:692"
                  />
                </label>
                <label className="w-full flex flex-col gap-2" data-node-id="27:694">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[#606060] text-[14px] leading-[20px]">Your Email*</span>
                  <input
                    type="email"
                    className="w-full h-12 rounded-[8px] bg-white border border-[#d1d3d9] px-3 text-[#404040] text-[14px] outline-none"
                    placeholder=""
                    aria-label="Your Email"
                    data-node-id="27:696"
                  />
                </label>
              </div>

              <label className="w-full flex flex-col gap-2" data-node-id="27:698">
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[#606060] text-[14px] leading-[20px]">Your message</span>
                <textarea
                  className="w-full h-40 rounded-[12px] bg-white border border-[#d1d3d9] px-3 py-2 text-[#404040] text-[14px] leading-[20px] outline-none resize-none"
                  placeholder="Type your message here"
                  aria-label="Your message"
                  data-node-id="27:701"
                />
              </label>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--m,12px)] items-center justify-center relative shrink-0 w-full" data-node-id="27:703">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#606060] text-[14px] text-center w-full" data-node-id="27:704">
                Your Rating*
              </p>
              <div className="content-stretch flex gap-[var(--xxs,6px)] items-center justify-center relative shrink-0 w-full" data-node-id="27:705">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button key={i} type="button" className="size-[26px] shrink-0" aria-label={`Rate ${i + 1} star`}>
                    <svg viewBox="0 0 26 26" className="block size-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 3.2L15.9 9.1L22.4 10.1L17.7 14.7L18.8 21.2L13 18.1L7.2 21.2L8.3 14.7L3.6 10.1L10.1 9.1L13 3.2Z"
                        fill="#9A9AA6"
                        stroke="#83838F"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-[#6f40dd] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[33px] shrink-0 w-full" data-node-id="27:719">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="27:720">
                Send Review
              </p>
            </div>
          </div>
        </div>
        <footer className="bg-[#f4f1f8] border-[#ccc] border-solid border-t h-auto lg:h-[376px] overflow-visible lg:overflow-clip relative shrink-0 w-full px-4 lg:px-16 py-8 lg:py-0" data-name="FAQ" data-node-id="22:184">
          <div className="flex flex-col lg:block">
            <p className="lg:-translate-x-1/2 lg:absolute font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[24px] lg:left-[108px] text-[#6f40dd] text-[28px] lg:text-[36px] lg:top-[63.5px] mb-4 lg:mb-0" data-node-id="22:185" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              Logo
            </p>
            <p className="lg:absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] lg:left-[64px] not-italic text-[#1d1d1d] text-[14px] lg:top-[111.5px] w-full lg:w-[469px] mb-6 lg:mb-0" data-node-id="22:196">
              Designed for creators and teams, this platform provides structured, high-performing prompts for AI image generation. Discover, reuse, and apply prompts that improve output quality and reduce trial and error.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:block gap-6 lg:gap-0 mb-6 lg:mb-0">
              <div className="lg:absolute content-stretch flex flex-col gap-[8px] items-start leading-[24px] lg:left-[776px] not-italic lg:top-[63.5px]" data-node-id="22:186">
                <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="22:187">
                  Home
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:188">
                  How it works
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:189">
                  About us
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:190">
                  Benefits
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:191">
                  Why choose us
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="27:513">
                  Features
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="27:514">
                  Faq
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="27:515">
                  Reviews
                </p>
              </div>
              <div className="lg:absolute content-stretch flex flex-col gap-[8px] items-start leading-[24px] lg:left-[997px] not-italic lg:top-[63.5px]" data-node-id="22:192">
                <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="22:193">
                  Know About us
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:194">
                  Terms and conditions
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#404040] text-[14px]" data-node-id="22:195">
                  Privacy policy
                </p>
              </div>
              <div className="lg:absolute content-stretch flex flex-col gap-[16px] items-start lg:left-[1260px] lg:top-[65.5px] w-full lg:w-[116px]" data-node-id="22:197">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="22:198">
                  Contact us
                </p>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="22:199">
                  <div className="relative shrink-0 size-[20px]" data-name="Outline/Brands/Twitter" data-node-id="22:200">
                    <div className="absolute inset-[13.59%_5.21%_12.37%_5.21%]" data-name="Icon" data-node-id="I22:200;71:153">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon10} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Outline/Brands/Instagram" data-node-id="22:201">
                    <div className="absolute inset-[10.59%_10.66%]" data-name="Icon" data-node-id="I22:201;71:168">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon11} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Outline/Brands/Instagram" data-node-id="22:202">
                    <div className="absolute inset-[9.38%_26.25%_9.37%_26.25%]" data-name="Icon" data-node-id="I22:202;71:164">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon12} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[20px]" data-name="Outline/Brands/Linkedin" data-node-id="22:203">
                    <div className="absolute inset-[5.21%_5.21%_9.37%_9.38%]" data-name="Icon" data-node-id="I22:203;71:156">
                      <img alt="" className="absolute block max-w-none size-full" src={imgIcon13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="lg:absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] lg:left-[64px] not-italic text-[#606060] text-[14px] lg:top-[199.5px] text-center lg:text-left pt-4 lg:pt-0 border-t lg:border-t-0 border-[#ccc]" data-node-id="22:204">
              @2026 brandname. All Right Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
