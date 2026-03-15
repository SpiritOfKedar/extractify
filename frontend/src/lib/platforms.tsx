import Image from "next/image";

export interface PlatformConfig {
  name: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tabs: string[];
  color: string;
  category: "social" | "document";
}

const iconClass = "h-8 w-8";
const documentIconClass = "h-8 w-8 rounded-full object-cover";
const documentIconContainClass = "h-8 w-8 object-cover";

// Helper component for platform icons from Figma exports
const PlatformIcon = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    className={className || iconClass}
  />
);

const SnapchatIcon = () => (
  <div className="relative h-8 w-8">
    <div className="absolute inset-0 rounded-full bg-[#fff853]" />
    <div className="absolute inset-[27.3%_25.45%_27.04%_25.12%]">
      <Image
        src="/assets/figma/7-368/imgVector3.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
    <div className="absolute inset-[26.21%_23.92%_25.81%_24.03%]">
      <Image
        src="/assets/figma/7-368/imgVector4.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  </div>
);

export const platformConfigs: Record<string, PlatformConfig> = {
  /* ── Social Media ─────────────────────────────────── */
  facebook: {
    name: "Facebook",
    slug: "facebook",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#1877F2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.875 8.125C13.5103 8.125 13.1606 8.26987 12.9027 8.52773C12.6449 8.78559 12.5 9.13533 12.5 9.5V11.125H14.3245L13.887 12.875H12.5V17.625C12.5 17.9702 12.2202 18.25 11.875 18.25H10.125C9.77982 18.25 9.5 17.9702 9.5 17.625V12.875H8.125C7.77982 12.875 7.5 12.5952 7.5 12.25V10.25C7.5 9.90482 7.77982 9.625 8.125 9.625H9.5V8.5C9.5 7.33968 9.96094 6.22688 10.7814 5.40641C11.6019 4.58594 12.7147 4.125 13.875 4.125H15.625C15.9702 4.125 16.25 4.40482 16.25 4.75V6.75C16.25 7.09518 15.9702 7.375 15.625 7.375H13.875C13.8418 7.375 13.8101 7.38817 13.7866 7.41161C13.7632 7.43505 13.75 7.46685 13.75 7.5V8.125H13.875Z" fill="white"/>
      </svg>
    ),
    title: "Download Facebook Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Videos", "Reels", "Stories", "Photos"],
    color: "#1877F2",
    category: "social",
  },
  youtube: {
    name: "YouTube",
    slug: "youtube",
    icon: <PlatformIcon src="/assets/Youtube.svg" alt="YouTube" />,
    title: "Download YouTube Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Long-form Video", "Shorts", "Live"],
    color: "#FF0000",
    category: "social",
  },
  instagram: {
    name: "Instagram",
    slug: "instagram",
    icon: <PlatformIcon src="/assets/Instagram.svg" alt="Instagram" />,
    title: "Download Instagram Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Reels", "Stories", "Photos", "Live", "Feed", "IGTV"],
    color: "#E1306C",
    category: "social",
  },
  tiktok: {
    name: "TikTok",
    slug: "tiktok",
    icon: <PlatformIcon src="/assets/Tik Tok.svg" alt="TikTok" />,
    title: "Download TikTok Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Short Video", "Live", "Stories", "Photos"],
    color: "#000000",
    category: "social",
  },
  snapchat: {
    name: "Snapchat",
    slug: "snapchat",
    icon: <SnapchatIcon />,
    title: "Download Snapchat Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Stories", "Highlights", "Spotlight"],
    color: "#FFFC00",
    category: "social",
  },
  twitter: {
    name: "Twitter / X",
    slug: "twitter",
    icon: <PlatformIcon src="/assets/Twitter.svg" alt="Twitter / X" />,
    title: "Download Twitter Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Videos", "Images", "Live"],
    color: "#1DA1F2",
    category: "social",
  },
  linkedin: {
    name: "LinkedIn",
    slug: "linkedin",
    icon: <PlatformIcon src="/assets/Linkedin.svg" alt="LinkedIn" />,
    title: "Download LinkedIn Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Video", "Stories", "Documents"],
    color: "#0A66C2",
    category: "social",
  },
  pinterest: {
    name: "Pinterest",
    slug: "pinterest",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#E60023"/>
        <path d="M12 5C8.13 5 5 8.13 5 12c0 2.87 1.75 5.32 4.2 6.44-.06-.49-.06-1.33 0-1.89.07-.49.63-3.36.63-3.36s-.14-.35-.14-.84c0-.77.42-1.33.98-1.33.49 0 .7.35.7.77 0 .49-.28 1.19-.49 1.82-.14.49.28.91.77.91.91 0 1.61-.98 1.61-2.38 0-1.26-.91-2.1-2.17-2.1-1.47 0-2.38 1.12-2.38 2.24 0 .42.14.91.35 1.12.07.07.07.14.07.21 0 .07-.07.35-.14.49 0 .07-.07.14-.21.07-.7-.35-1.12-1.33-1.12-2.17 0-1.75 1.26-3.36 3.64-3.36 1.89 0 3.43 1.4 3.43 3.22 0 1.89-1.19 3.43-2.87 3.43-.56 0-1.12-.28-1.26-.63l-.35 1.33c-.14.49-.49 1.12-.7 1.47.56.14 1.12.28 1.68.28 3.85 0 7-3.15 7-7S15.87 5 12 5z" fill="white"/>
      </svg>
    ),
    title: "Download Pinterest Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Images", "Video Pins"],
    color: "#E60023",
    category: "social",
  },
  reddit: {
    name: "Reddit",
    slug: "reddit",
    icon: <PlatformIcon src="/assets/Reddit.svg" alt="Reddit" />,
    title: "Download Reddit Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Videos", "GIFs", "Images"],
    color: "#FF4500",
    category: "social",
  },
  tumblr: {
    name: "Tumblr",
    slug: "tumblr",
    icon: <PlatformIcon src="/assets/Tumbler.svg" alt="Tumblr" />,
    title: "Download Tumblr Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["GIFs", "Videos", "Photos", "Reblogs", "Text Posts"],
    color: "#36465D",
    category: "social",
  },
  twitch: {
    name: "Twitch",
    slug: "twitch",
    icon: <PlatformIcon src="/assets/Twitch.svg" alt="Twitch" />,
    title: "Download Twitch Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Live Streams", "VODs", "Clips", "Highlights", "Chat Logs"],
    color: "#9146FF",
    category: "social",
  },
  vimeo: {
    name: "Vimeo",
    slug: "vimeo",
    icon: <PlatformIcon src="/assets/Vimeo.svg" alt="Vimeo" />,
    title: "Download Vimeo Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Professional Videos", "Live", "4K", "360°"],
    color: "#1AB7EA",
    category: "social",
  },
  vk: {
    name: "VK (VKontakte)",
    slug: "vk",
    icon: <PlatformIcon src="/assets/Vkontakte.svg" alt="VK" />,
    title: "Download VK Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Videos", "Music", "Stories", "Live", "Photos"],
    color: "#4680C2",
    category: "social",
  },
  soundcloud: {
    name: "SoundCloud",
    slug: "soundcloud",
    icon: <PlatformIcon src="/assets/Soundcloud.svg" alt="SoundCloud" />,
    title: "Download SoundCloud Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Audio Tracks", "Playlists", "Podcasts", "Waveforms"],
    color: "#FF5500",
    category: "social",
  },
  telegram: {
    name: "Telegram",
    slug: "telegram",
    icon: <PlatformIcon src="/assets/Telegram.svg" alt="Telegram" />,
    title: "Download Telegram Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Channels", "Groups", "Bots", "Stories", "Files"],
    color: "#26A5E4",
    category: "social",
  },
  threads: {
    name: "Threads",
    slug: "threads",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage8.png" alt="Threads" className={documentIconClass} />,
    title: "Download Threads Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Text", "Images", "Videos"],
    color: "#000000",
    category: "social",
  },

  /* ── Document / Publication Platforms ──────────────── */
  scribd: {
    name: "Scribd",
    slug: "scribd",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage10.png" alt="Scribd" className={documentIconClass} />,
    title: "Download Scribd Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["PDFs", "Audiobooks", "Docs"],
    color: "#1A7BBA",
    category: "document",
  },
  slideshare: {
    name: "SlideShare",
    slug: "slideshare",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage6.png" alt="SlideShare" className={documentIconClass} />,
    title: "Download SlideShare Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Presentations", "PDFs"],
    color: "#0077B5",
    category: "document",
  },
  issuu: {
    name: "Issuu",
    slug: "issuu",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage5.png" alt="Issuu" className={documentIconClass} />,
    title: "Download Issuu Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Magazines", "PDFs"],
    color: "#F36D21",
    category: "document",
  },
  calameo: {
    name: "Calameo",
    slug: "calameo",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage12.png" alt="Calameo" className={documentIconClass} />,
    title: "Download Calameo Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Publications", "Docs"],
    color: "#009B3A",
    category: "document",
  },
  yumpu: {
    name: "Yumpu",
    slug: "yumpu",
    icon: <PlatformIcon src="/assets/figma/7-368/imgImage11.png" alt="Yumpu" className={documentIconClass} />,
    title: "Download Yumpu Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["Magazines", "PDFs"],
    color: "#FF6600",
    category: "document",
  },
  slideserve: {
    name: "SlideServe",
    slug: "slideserve",
    icon: <PlatformIcon src="/assets/Speech Balloon.png" alt="SlideServe" className={documentIconContainClass} />,
    title: "Download SlideServe Content in Seconds",
    description:
      "Access high-quality downloads from multiple platforms by simply pasting your URL.",
    tabs: ["PowerPoints"],
    color: "#00A4E4",
    category: "document",
  },
};

/* Helper to get platforms by category */
export const socialPlatforms = Object.values(platformConfigs).filter(
  (p) => p.category === "social"
);
export const documentPlatforms = Object.values(platformConfigs).filter(
  (p) => p.category === "document"
);
