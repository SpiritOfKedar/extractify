import { Download, Smartphone, Film, Shield, Zap, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";

const benefits = [
  {
    icon: <Download className="h-6 w-6 text-primary" />,
    title: "One-Click Downloads",
    description:
      "Skip the extra steps. Just paste your link, hit download, and save your content instantly — it's that easy.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "Works on All Devices",
    description:
      "Access the platform from your phone, tablet, or computer. It adapts to any screen size seamlessly.",
  },
  {
    icon: <Film className="h-6 w-6 text-primary" />,
    title: "Multiple Formats",
    description:
      "Download in the format that works for you — MP4, MP3, images, and more depending on the content type.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Safe & Clean",
    description:
      "No popups, no malware, no sketchy redirects. Your experience here is clean and straightforward.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "No Software Needed",
    description:
      "Everything runs in your browser. There's nothing to install or configure — just visit and use.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Access",
    description:
      "Available from anywhere in the world. No geo-restrictions or regional blocks — download freely.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Benefits That Make Downloading Easier"
        subtitle="Discover the advantages that set us apart and make saving content simpler than ever."
        subtitleWidth="max-w-[480px]"
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {benefits.slice(0, 2).map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ece8f5] flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#2d2d2d]">
                {b.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#606060]">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center column */}
        <div className="flex flex-col gap-6">
          {benefits.slice(2, 4).map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ece8f5] flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#2d2d2d]">
                {b.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#606060]">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {benefits.slice(4, 6).map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ece8f5] flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#2d2d2d]">
                {b.title}
              </h3>
              <p className="text-[14px] leading-[22px] text-[#606060]">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
