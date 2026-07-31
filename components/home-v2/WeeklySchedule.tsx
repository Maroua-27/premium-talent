import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    time: "09:00",
    title: "Registration Call",
    person: "Emma Carter",
    color: "bg-sky-500",
  },
  {
    time: "09:30",
    title: "Available",
    person: "Free Slot",
    color: "bg-emerald-500",
  },
  {
    time: "10:00",
    title: "Registration Call",
    person: "James Wilson",
    color: "bg-sky-500",
  },
  {
    time: "10:30",
    title: "Registration Call",
    person: "Sarah Mitchell",
    color: "bg-sky-500",
  },
  {
    time: "11:00",
    title: "Compliance Follow-up",
    person: "Ahmed Hassan",
    color: "bg-amber-500",
  },
  {
    time: "11:30",
    title: "Available",
    person: "Free Slot",
    color: "bg-emerald-500",
  },
  {
    time: "12:00",
    title: "Team Meeting",
    person: "Recruitment Team",
    color: "bg-violet-500",
  },
  {
    time: "12:30",
    title: "Available",
    person: "Free Slot",
    color: "bg-emerald-500",
  },
];

export default function WeeklySchedule() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            Today&#39;s Schedule
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Tuesday • 28 July 2026
          </p>

        </div>

        <CalendarDays
          size={20}
          className="text-[#00A384]"
        />

      </div>

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>

        <p className="text-sm font-semibold text-gray-700">
          Today
        </p>

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>

      </div>

      <div className="divide-y divide-gray-100">

        {events.map((event) => (

          <div
            key={`${event.time}-${event.person}`}
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50"
          >

            <div className="w-14 text-sm font-semibold text-gray-500">
              {event.time}
            </div>

            <div className={`h-10 w-1 rounded-full ${event.color}`} />

            <div className="flex-1">

              <p className="font-semibold text-gray-900">
                {event.title}
              </p>

              <p className="text-sm text-gray-500">
                {event.person}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}