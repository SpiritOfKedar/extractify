import { Zap, Globe, UserX, DollarSign, Shield, Infinity } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Fast Processing",
    description:
      "Content is processed and ready to download within seconds — no unnecessary delays.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "22+ Supported Platforms",
    description:
      "From Instagram to Scribd, we cover a wide range of social and content platforms.",
  },
  {
    icon: <UserX className="h-6 w-6 text-primary" />,
    title: "No Login Required",
    description:
      "Access every feature without creating an account. Just paste and download.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Completely Free",
    description:
      "No hidden fees, no premium tier. Every feature is available to every user at no cost.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure and Private",
    description:
      "We don't track or store your downloads. Your activity stays private.",
  },
  {
    icon: <Infinity className="h-6 w-6 text-primary" />,
    title: "Unlimited Downloads",
    description:
      "Download as much as you need. There's no daily cap or limit on how many files you can save.",
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Powerful Features for Fast and Easy Downloads"
        subtitle="Everything you need to download efficiently — all in one tool, no fuss."
        subtitleWidth="max-w-[480px]"
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white rounded-2xl shadow-[2px_2px_6px_0px_rgba(211,211,211,0.25)] px-10 py-6 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-[#ece8f5] flex items-center justify-center">
              {f.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-[#2d2d2d]">
              {f.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-[#606060]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
