import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  FileText,
  Linkedin,
  Music,
  Send,
  MessageCircle,
  Tv,
  Camera,
  Globe,
  Presentation,
  BookOpen,
} from "lucide-react";

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

export const platformConfigs: Record<string, PlatformConfig> = {
  /* ── Social Media ─────────────────────────────────── */
  facebook: {
    name: "Facebook",
    slug: "facebook",
    icon: <Facebook className={iconClass} style={{ color: "#1877F2" }} />,
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
    icon: <Youtube className={iconClass} style={{ color: "#FF0000" }} />,
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
    icon: <Instagram className={iconClass} style={{ color: "#E1306C" }} />,
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
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.28 8.28 0 005.58 2.15V11.9a4.83 4.83 0 01-3.77-1.85V6.69h3.77z" />
      </svg>
    ),
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
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="#FFFC00">
        <path d="M12.2 2c3.2 0 5.2 2.2 5.4 5.8v1.5c.8.1 1.5.5 1.5.9 0 .5-.7.9-1.6 1-.2 1.6-1.2 3.1-2.7 4 .1.4-.1 1-.7 1.3-.7.3-1.4.4-1.9.8-.5.5-.5 1.2-2.2 1.2s-1.7-.7-2.2-1.2c-.5-.4-1.2-.5-1.9-.8-.6-.3-.8-.9-.7-1.3-1.5-.9-2.5-2.4-2.7-4-.9-.1-1.6-.5-1.6-1 0-.4.7-.8 1.5-.9V7.8C3 4.3 5.4 2 8.5 2h3.7z" />
      </svg>
    ),
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
    icon: <Twitter className={iconClass} style={{ color: "#1DA1F2" }} />,
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
    icon: <Linkedin className={iconClass} style={{ color: "#0A66C2" }} />,
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
      <svg className={iconClass} viewBox="0 0 24 24" fill="#E60023">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.2-.1-.7-.1-1.9 0-2.7.1-.7.9-4.8.9-4.8s-.2-.5-.2-1.2c0-1.1.6-1.9 1.4-1.9.7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.6-.2.7.4 1.3 1.1 1.3 1.3 0 2.3-1.4 2.3-3.4 0-1.8-1.3-3-3.1-3-2.1 0-3.4 1.6-3.4 3.2 0 .6.2 1.3.5 1.6.1.1.1.2.1.3 0 .1-.1.5-.2.7 0 .1-.1.2-.3.1-1-.5-1.6-1.9-1.6-3.1 0-2.5 1.8-4.8 5.2-4.8 2.7 0 4.9 2 4.9 4.6 0 2.7-1.7 4.9-4.1 4.9-.8 0-1.6-.4-1.8-.9l-.5 1.9c-.2.7-.7 1.6-1 2.1.8.2 1.6.4 2.4.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
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
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="#FF4500">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.8 11.3c0 .1 0 .3-.1.4 0 2.6-3 4.7-6.7 4.7s-6.7-2.1-6.7-4.7c0-.1 0-.3.1-.4-.4-.3-.6-.8-.6-1.3 0-1 .8-1.7 1.7-1.7.5 0 .9.2 1.2.5 1.2-.8 2.8-1.4 4.5-1.4l.8-3.9c0-.2.2-.3.4-.2l2.7.6c.2-.4.6-.7 1.1-.7.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2l-2.4-.5-.7 3.5c1.7 0 3.2.5 4.4 1.4.3-.3.7-.5 1.2-.5.9 0 1.7.8 1.7 1.7 0 .5-.3 1-.6 1.3zM9.3 13c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.6-1.2-1.2-1.2zm5.4 0c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.6-1.2-1.2-1.2zm-5.1 3.6c.3.3.9.7 2.4.7s2.1-.4 2.4-.7c.2-.2.4-.2.6 0 .2.2.2.4 0 .6-.4.4-1.3.9-3 .9s-2.6-.5-3-.9c-.2-.2-.2-.5 0-.6.2-.2.4-.2.6 0z" />
      </svg>
    ),
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
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="#36465D">
        <path d="M14.6 20.1c-2.9 0-4.8-1.5-4.8-5v-5H7.5V7.8c2.7-.7 3.8-3.1 4-5.3h2.5v4.8h3.4v2.8H14v4.6c0 1.4.7 1.9 1.8 1.9h1.8v3.5h-3z" />
      </svg>
    ),
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
    icon: <Tv className={iconClass} style={{ color: "#9146FF" }} />,
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
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="#1AB7EA">
        <path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.7C14.7 20 12.3 22 10.3 22c-1.2 0-2.3-1.1-3.1-3.4-.6-2-1.1-4-1.7-6-.6-2.3-1.3-3.4-2-3.4-.2 0-.7.3-1.5.9L1 8.8c1-.9 2-1.7 2.9-2.6C5.3 5 6.4 4.3 7.1 4.3c1.5-.1 2.4.9 2.7 3 .4 2.3.6 3.7.8 4.3.4 2 .9 3 1.5 3 .4 0 1.1-.7 1.9-2 .8-1.3 1.3-2.4 1.3-3.1.1-1.2-.3-1.8-1.3-1.8-.5 0-1 .1-1.5.3 1-3.2 2.8-4.8 5.6-4.7 2 .1 3 1.4 2.9 3.9z" />
      </svg>
    ),
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
    icon: <Globe className={iconClass} style={{ color: "#4680C2" }} />,
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
    icon: <Music className={iconClass} style={{ color: "#FF5500" }} />,
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
    icon: <Send className={iconClass} style={{ color: "#26A5E4" }} />,
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
    icon: <MessageCircle className={iconClass} style={{ color: "#000000" }} />,
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
    icon: <FileText className={iconClass} style={{ color: "#1A7BBA" }} />,
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
    icon: <Presentation className={iconClass} style={{ color: "#0077B5" }} />,
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
    icon: <BookOpen className={iconClass} style={{ color: "#F36D21" }} />,
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
    icon: <FileText className={iconClass} style={{ color: "#009B3A" }} />,
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
    icon: <BookOpen className={iconClass} style={{ color: "#FF6600" }} />,
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
    icon: <Presentation className={iconClass} style={{ color: "#00A4E4" }} />,
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
