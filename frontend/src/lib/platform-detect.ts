const PLATFORM_DOMAIN_MAP: Record<string, string> = {
  // Social
  "instagram.com": "instagram",
  "instagr.am": "instagram",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "tiktok.com": "tiktok",
  "twitter.com": "twitter",
  "x.com": "twitter",
  "facebook.com": "facebook",
  "fb.com": "facebook",
  "fb.watch": "facebook",
  "snapchat.com": "snapchat",
  "story.snapchat.com": "snapchat",
  "linkedin.com": "linkedin",
  "pinterest.com": "pinterest",
  "pin.it": "pinterest",
  "reddit.com": "reddit",
  "tumblr.com": "tumblr",
  "twitch.tv": "twitch",
  "vimeo.com": "vimeo",
  "vk.com": "vk",
  "soundcloud.com": "soundcloud",
  "t.me": "telegram",
  "telegram.org": "telegram",
  "threads.net": "threads",
  "threads.com": "threads",

  // Documents
  "scribd.com": "scribd",
  "slideshare.net": "slideshare",
  "issuu.com": "issuu",
  "calameo.com": "calameo",
  "yumpu.com": "yumpu",
  "slideserve.com": "slideserve",
};

export function detectPlatformSlugFromUrl(input: string): string | null {
  const value = input.trim().toLowerCase();
  if (!value) return null;

  let host = "";
  try {
    const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
    host = new URL(withProtocol).hostname.toLowerCase();
  } catch {
    host = value;
  }

  const normalizedHost = host.replace(/^www\./, "");

  for (const [domain, slug] of Object.entries(PLATFORM_DOMAIN_MAP)) {
    if (normalizedHost === domain || normalizedHost.endsWith(`.${domain}`)) {
      return slug;
    }
  }

  return null;
}
