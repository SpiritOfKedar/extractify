import SectionHeader from "./SectionHeader";

const reasons = [
  {
    num: "01",
    title: "Smooth and Hassle-Free Experience",
    description:
      "Our platform is designed to keep the process simple, allowing you to download content quickly without complicated steps, technical knowledge, or unnecessary interruptions.",
  },
  {
    num: "02",
    title: "Safe and Trustworthy Environment",
    description:
      "We prioritize user safety by ensuring secure processing and maintaining transparency, so you can use the service confidently without concerns about privacy or risks.",
  },
  {
    num: "03",
    title: "Consistent Performance You Can Rely On",
    description:
      "With optimized technology and stable performance, you can expect dependable results every time you download content, regardless of the platform or device you use.",
  },
  {
    num: "04",
    title: "Wide Platform Coverage",
    description:
      "Access downloads from a large number of social media platforms in one place, giving you flexibility without needing multiple tools or websites.",
  },
  {
    num: "05",
    title: "No Limits or Restrictions",
    description:
      "Enjoy the freedom to download content whenever you want, without daily limits, subscriptions, or locked features that interrupt your experience.",
  },
  {
    num: "06",
    title: "Accessible Anytime, Anywhere",
    description:
      "Whether you are at home, at work, or on the move, you can rely on our platform to work smoothly across devices with consistent performance.",
  },
];

export default function MoreReasons() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="More Reasons to Choose Our Platform"
        subtitle="Discover additional advantages that make our platform a reliable and convenient choice for downloading content from multiple social media platforms."
        subtitleWidth="max-w-[614px]"
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        {reasons.map((r) => (
          <div key={r.num} className="flex gap-3">
            <span className="text-[34px] font-semibold text-primary/40 leading-none shrink-0">
              {r.num}
            </span>
            <div>
              <h3 className="text-[16px] font-semibold text-[#2d2d2d] mb-2">
                {r.title}
              </h3>
              <p className="text-[16px] leading-[24px] text-[#606060] max-w-[468px]">
                {r.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
