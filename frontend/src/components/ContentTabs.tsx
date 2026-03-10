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
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === tab
              ? "border-primary text-primary bg-card"
              : "border-border text-foreground bg-card hover:border-primary hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
