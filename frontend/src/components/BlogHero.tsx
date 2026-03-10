import Image from "next/image";

interface BlogHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogHero({
  title,
  category,
  date,
  readTime,
  image,
}: BlogHeroProps) {
  return (
    <div className="relative h-[462px] w-full overflow-hidden rounded-[10px] bg-[#1b1b1f]">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 857px"
        priority
        unoptimized
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[166px]">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[17.5px]" />
        <div className="relative flex flex-col gap-2.5 p-5">
          {/* Category tag */}
          <div className="inline-flex self-start rounded-[20px] bg-[#1e1e1e] px-2.5 py-[5px]">
            <div className="flex items-center gap-2.5">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm text-white">{category}</span>
            </div>
          </div>

          {/* Title and meta */}
          <div className="flex flex-col gap-2.5 text-white">
            <h1 className="text-[27px] font-semibold leading-normal max-w-[656px]">
              {title}
            </h1>
            <div className="flex items-center text-sm">
              <span>{date}</span>
              <span className="ml-2 list-item list-disc pl-3">{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
