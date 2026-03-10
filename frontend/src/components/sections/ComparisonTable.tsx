import SectionHeader from "./SectionHeader";

const rows = [
  {
    feature: "Cost to Use",
    us: "100% Free",
    them: "Subscription or hidden fees",
  },
  {
    feature: "Supported Platforms",
    us: "22 Platforms",
    them: "Limited platforms",
  },
  {
    feature: "Download Categories",
    us: "Video, photo, audio, documents",
    them: "Limited categories",
  },
  {
    feature: "Download Speed",
    us: "High-speed processing",
    them: "Slower conversion",
  },
  {
    feature: "Privacy & Security",
    us: "No data tracking",
    them: "Data may be stored",
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full max-w-[1152px] mx-auto px-4 md:px-8 lg:px-0">
      <SectionHeader
        title="Why Choose Our Free Social Media Downloader"
        subtitle="See how our platform stands out with faster speeds, more supported platforms, and a secure experience without hidden costs or data tracking."
        subtitleWidth="max-w-[570px]"
      />

      <div className="mt-10 overflow-x-auto">
        <table className="w-full max-w-[372px] md:max-w-[880px] mx-auto border-collapse table-fixed md:table-auto min-w-[372px] md:min-w-[760px]">
          <thead>
            <tr className="bg-white border-b border-[#e5e0ef]">
              <th className="text-left text-[13px] md:text-[14px] font-medium text-[#2d2d2d] py-3 md:py-4 px-3 md:px-4 w-1/3">
                Features
              </th>
              <th className="text-left text-[13px] md:text-[14px] font-medium text-primary py-3 md:py-4 px-3 md:px-4 w-1/3 border-x border-[#d7c9f6] bg-[#f9f5ff]">
                Brand Name
              </th>
              <th className="text-left text-[13px] md:text-[14px] font-medium text-[#2d2d2d] py-3 md:py-4 px-3 md:px-4 w-1/3">
                Other Downloaders
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="bg-white border-b border-[#e5e0ef]">
                <td className="text-[13px] md:text-[14px] text-[#404040] py-4 md:py-5 px-3 md:px-4 align-middle">
                  {row.feature}
                </td>
                <td className="py-4 md:py-5 px-3 md:px-4 border-x border-[#d7c9f6] bg-[#f9f5ff] align-middle">
                  <span className="text-[13px] md:text-[14px] text-[#404040] break-words">{row.us}</span>
                </td>
                <td className="py-4 md:py-5 px-3 md:px-4 align-middle">
                  <span className="text-[13px] md:text-[14px] text-[#404040] break-words">{row.them}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
