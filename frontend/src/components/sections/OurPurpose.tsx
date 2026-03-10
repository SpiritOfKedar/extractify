import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function OurPurpose() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Our Purpose"
        subtitle="Making content downloads simple, accessible, and reliable for everyone, everywhere."
        subtitleWidth="max-w-[372px]"
      />

      <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        {/* Left: Text */}
        <div className="flex-1 space-y-4 text-[16px] leading-[28px] text-[#404040]">
          <p>
            Our purpose is to provide users with a fast, convenient, and
            trustworthy way to download content from multiple social media
            platforms without complications. We aim to remove barriers such as
            subscriptions, technical complexity, and privacy concerns by
            offering a solution that is easy to use and accessible to everyone.
            By focusing on speed, simplicity, and security, we strive to create
            a platform that people can rely on whenever they need quick access
            to their favorite online content.
          </p>
          <p>
            We are committed to delivering consistent performance, high-quality
            results, and a secure environment where users can feel confident
            while downloading content. Our goal is not only to provide a useful
            tool but also to build a reliable solution that people can depend
            on whenever they need quick access to their favorite media. Through
            continuous improvement and user-focused innovation, we aim to make
            the downloading experience smoother, faster, and more accessible for
            users around the world.
          </p>
        </div>

        {/* Right: Image */}
        <div className="shrink-0 w-[180px] h-[197px] lg:w-[360px] lg:h-[360px] relative">
          <Image
            src="/purpose-target.svg"
            alt="Our purpose illustration"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
