interface SectionHeaderProps {
  title: string;
  subtitle: string;
  subtitleWidth?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  subtitleWidth = "max-w-[614px]",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="text-[24px] font-semibold text-[#2d2d2d] leading-normal">
        {title}
      </h2>
      <p
        className={`text-[16px] font-medium leading-[24px] text-[#404040] ${subtitleWidth}`}
      >
        {subtitle}
      </p>
    </div>
  );
}
