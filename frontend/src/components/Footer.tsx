import Link from "next/link";

const platformLinks = [
  { name: "Instagram", href: "/platform/instagram" },
  { name: "YouTube", href: "/platform/youtube" },
  { name: "TikTok", href: "/platform/tiktok" },
  { name: "Twitter / X", href: "/platform/twitter" },
  { name: "Facebook", href: "/platform/facebook" },
  { name: "Snapchat", href: "/platform/snapchat" },
  { name: "LinkedIn", href: "/platform/linkedin" },
  { name: "Pinterest", href: "/platform/pinterest" },
];

const resourceLinks = [
  { name: "Blog", href: "/blogs" },
  { name: "FAQ", href: "/#faq" },
  { name: "Reviews", href: "/#reviews" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a2e] text-white">
      <div className="mx-auto max-w-[1068px] px-6 py-14">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          {/* Brand */}
          <div className="max-w-[280px]">
            <h3 className="text-[20px] font-bold text-white mb-3">
              Extractify
            </h3>
            <p className="text-[14px] leading-[24px] text-gray-400">
              Download content from your favorite social media platforms
              quickly and easily. Free, fast, and secure — no sign-up
              required.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {["Twitter", "Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[12px] text-gray-300 hover:bg-white/20 transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wide">
              Platforms
            </h4>
            <ul className="space-y-2">
              {platformLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-gray-400 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-gray-400 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-gray-400 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} Extractify. All rights reserved.
          </p>
          <p className="text-[13px] text-gray-500">
            Made with care for content creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
