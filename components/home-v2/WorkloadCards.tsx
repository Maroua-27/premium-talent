import {
  Briefcase,
  CalendarCheck2,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

const cards = [
  {
    title: "Self Registered",
    value: "18",
    change: "+5 Today",
    description: "Candidates awaiting registration",
    icon: UserPlus,
    color: "bg-[#E8F8F4] text-[#00A384]",
  },
  {
    title: "Registration Calls",
    value: "9",
    change: "6 Remaining",
    description: "Today's scheduled calls",
    icon: CalendarCheck2,
    color: "bg-[#EEF4FF] text-[#2563EB]",
  },
  {
    title: "Consultant Requests",
    value: "14",
    change: "42 Candidates Needed",
    description: "Active sourcing requests",
    icon: Briefcase,
    color: "bg-[#FFF8E6] text-[#F59E0B]",
  },
  {
    title: "Compliance",
    value: "9",
    change: "1 Overdue",
    description: "Outstanding documents",
    icon: ShieldCheck,
    color: "bg-[#FDF2F8] text-[#DB2777]",
  },
];

export default function WorkloadCards() {
  return (
    <section className="grid grid-cols-4 gap-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <article
            key={card.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-gray-900">
                  {card.value}
                </h2>

              </div>

              <div className={`rounded-2xl p-3 ${card.color}`}>

                <Icon size={22} />

              </div>

            </div>

            <p className="mt-5 text-sm font-semibold text-[#00A384]">
              {card.change}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {card.description}
            </p>

          </article>

        );

      })}

    </section>
  );
}