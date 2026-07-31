import {
  ArrowRight,
  Briefcase,
  Star,
  UserPlus,
  Search,
} from "lucide-react";

const actions = [
  {
    title: "Review Applications",
    description: "18 new candidates waiting for review.",
    icon: Search,
    color: "bg-[#EEF4FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    title: "Open My Vacancies",
    description: "Manage your active recruitment campaigns.",
    icon: Briefcase,
    color: "bg-[#E8F8F4]",
    iconColor: "text-[#00A384]",
  },
  {
    title: "Premium Talent",
    description: "Browse and match premium candidates.",
    icon: Star,
    color: "bg-[#FFF8E8]",
    iconColor: "text-[#F59E0B]",
  },
  {
    title: "Add Candidate",
    description: "Create a new Premium Talent profile.",
    icon: UserPlus,
    color: "bg-[#F5EDFF]",
    iconColor: "text-[#8B5CF6]",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-gray-900">
        Quick Actions
      </h2>

      <p className="mt-2 text-gray-500">
        Jump straight into the tasks you use most every day.
      </p>

      <div className="mt-8 space-y-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="group flex w-full items-center justify-between rounded-2xl border border-gray-200 p-5 text-left transition hover:border-[#00A384] hover:bg-[#F7FFFD]"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`rounded-2xl p-3 ${action.color}`}
                >
                  <Icon
                    size={20}
                    className={action.iconColor}
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {action.description}
                  </p>

                </div>

              </div>

              <ArrowRight
                size={18}
                className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#00A384]"
              />

            </button>

          );

        })}

      </div>

    </section>
  );
}