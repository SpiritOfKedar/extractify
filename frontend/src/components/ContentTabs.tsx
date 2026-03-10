"use client";

interface ContentTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ContentTabs({
  tabs,
  activeTab,
  onTabChange,
}: ContentTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`rounded-[33px] px-4 py-2 text-[14px] font-medium transition-colors ${
            activeTab === tab
              ? "border-2 border-primary text-primary bg-tab-bg"
              : "border border-border-light text-tab-inactive bg-tab-bg hover:border-primary hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
