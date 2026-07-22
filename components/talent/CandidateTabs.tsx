"use client";

interface CandidateTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "Overview",
  "CV Summary",
  "Full CV",
  "Registration Notes",
  "Activity",
];

export default function CandidateTabs({
  activeTab,
  setActiveTab,
}: CandidateTabsProps) {
  return (
    <div className="sticky top-0 z-20 border-b bg-white px-6 py-4">
      <div className="flex gap-3 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-xl px-5 py-2 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-[#00A384] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}