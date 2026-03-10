import { Zap, Lock, CreditCard, MonitorSmartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Fast and Efficient Downloads",
    description:
      "Our platform is optimized for speed, allowing you to download videos, photos, and other content within seconds without unnecessary delays or complicated steps.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Secure and Private Experience",
    description:
      "We prioritize your privacy by ensuring that your links and activity are not stored or tracked, giving you a safe environment you can trust every time you use the service.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: "Completely Free Access",
    description:
      "Enjoy unlimited downloads without subscriptions, hidden charges, or premium restrictions, making the platform accessible to everyone whenever they need it.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
    title: "Multiple Platforms in One Place",
    description:
      "Download content from a wide range of social media platforms using a single tool, eliminating the need to switch between different websites or applications.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Why Choose Us"
        subtitle="We provide a fast, secure, and user-friendly platform designed to make downloading content from multiple social media platforms simple and reliable."
        subtitleWidth="max-w-[614px]"
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#ece8f5] rounded-[20px] min-h-[350px] p-5 flex flex-col items-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
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
