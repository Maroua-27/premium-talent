import {
  AlertCircle,
  Clock3,
  Mail,
  Users,
  ChevronRight,
} from "lucide-react";

const priorities = [
  {
    title: "Review new Mathematics applications",
    vacancy: "Kings College • Mathematics Teacher",
    due: "Today",
    priority: "High",
    icon: AlertCircle,
    color: "bg-red-100",
    iconColor: "text-red-600",
    badge: "bg-red-50 text-red-700",
  },
  {
    title: "Send Primary shortlist",
    vacancy: "GEMS Education • Primary Teacher",
    due: "Tomorrow",
    priority: "Medium",
    icon: Mail,
    color: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "bg-amber-50 text-amber-700",
  },
  {
    title: "Confirm candidate availability",
    vacancy: "Nord Anglia • Science Teacher",
    due: "Friday",
    priority: "Normal",
    icon: Users,
    color: "bg-sky-100",
    iconColor: "text-sky-700",
    badge: "bg-sky-50 text-sky-700",
  },
  {
    title: "Follow up after interview",
    vacancy: "ICT Teacher • Bangkok",
    due: "Next Week",
    priority: "Low",
    icon: Clock3,
    color: "bg-emerald-100",
    iconColor: "text-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
  },
];

export default function VacanciesNeedingAttention() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Priorities
          </h2>

          <p className="mt-2 text-gray-500">
            Your highest priority tasks based on urgency and due dates.
          </p>

        </div>

        <button className="text-sm font-semibold text-[#00A384] hover:underline">
          View All Tasks
        </button>

      </div>

      <div className="space-y-4 p-6">

        {priorities.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 p-5 text-left transition hover:border-[#00A384] hover:shadow-md"
            >

              <div className="flex items-center gap-5">

                <div className={`rounded-2xl p-3 ${item.color}`}>

                  <Icon
                    size={20}
                    className={item.iconColor}
                  />

                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.badge}`}
                    >
                      {item.priority}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.vacancy}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="text-right">

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Due
                  </p>

                  <p className="mt-1 font-semibold text-gray-700">
                    {item.due}
                  </p>

                </div>

                <ChevronRight
                  size={20}
                  className="text-gray-300"
                />

              </div>

            </button>

          );

        })}

      </div>

    </section>
  );
}