import {
  Briefcase,
  Users,
  CalendarDays,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "New Applications",
    value: "18",
    trend: "+7 since yesterday",
    subtitle: "Across 6 active vacancies",
    icon: Users,
    accent: "bg-[#00A384]",
    iconBg: "bg-[#E8F8F4]",
    iconColor: "text-[#00A384]",
  },
  {
    title: "Active Vacancies",
    value: "57",
    trend: "12 require attention",
    subtitle: "3 closing this week",
    icon: Briefcase,
    accent: "bg-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Interviews This Week",
    value: "9",
    trend: "2 scheduled today",
    subtitle: "Across 5 schools",
    icon: CalendarDays,
    accent: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Shortlists Due",
    value: "4",
    trend: "1 due today",
    subtitle: "3 due this week",
    icon: ClipboardList,
    accent: "bg-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function WorkloadCards() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <button
            key={card.title}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00A384] hover:shadow-xl"
          >

            {/* Accent */}

            <div className={`h-1 w-full ${card.accent}`} />

            <div className="p-7">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-sm font-medium text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`rounded-2xl p-4 transition group-hover:scale-105 ${card.iconBg}`}
                >
                  <Icon
                    size={24}
                    className={card.iconColor}
                  />
                </div>

              </div>

              <div className="mt-6 flex items-center gap-2">

                <TrendingUp
                  size={15}
                  className="text-[#00A384]"
                />

                <span className="text-sm font-semibold text-[#00A384]">
                  {card.trend}
                </span>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                {card.subtitle}
              </p>

            </div>

          </button>

        );

      })}

    </section>
  );
}