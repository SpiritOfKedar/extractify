import SectionHeader from "./SectionHeader";

const stats = [
  { value: "200k+", label: "Happy users" },
  { value: "3M+", label: "Files Downloaded" },
  { value: "99%", label: "Success Rate" },
  { value: "120+", label: "Countries Reached" },
];

export default function PlatformOverview() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Our Platform Overview"
        subtitle="Save your favorite online media in seconds with a fast, efficient, and easy-to-use downloader that works across multiple platforms."
        subtitleWidth="max-w-[519px]"
      />

      <div className="mt-8 md:mt-10 flex flex-col lg:flex-row lg:gap-[155px] items-start justify-center">
        {/* Left: Description */}
        <div className="w-full lg:w-[612px] space-y-[15px] text-[16px] leading-[28px] text-[#404040]">
          <p>
            Our platform is an all-in-one social media downloader designed to
            help users save their favorite online content quickly and
            effortlessly. Whether you want to download videos, reels, photos,
            carousels, or posts, our tool makes the process simple by allowing
            you to paste a link and get instant results in high quality.
          </p>
          <p>
            We focus on delivering a fast, user-friendly, and reliable
            downloading experience across multiple platforms, ensuring
            compatibility with different devices including smartphones, tablets,
            and desktops. With advanced processing technology, users can enjoy
            smooth performance, unlimited downloads, and high-speed conversions
            without unnecessary steps or complications.
          </p>
        </div>

        {/* Right: Stats grid */}
        <div className="grid grid-cols-2 gap-5 shrink-0 mt-4 lg:mt-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#ece8f5] rounded-[12px] p-5 w-[176px] md:w-[184px] h-[123px] flex flex-col items-start justify-center"
            >
              <span className="text-[40px] font-bold text-[#2d2d2d] leading-tight">
                {s.value}
              </span>
              <span className="text-[16px] text-black mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
