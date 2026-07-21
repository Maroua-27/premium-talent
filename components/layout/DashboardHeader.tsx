import {
  CalendarDays,
  Users,
} from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            Premium Talent Programme
          </h1>

          <span className="rounded-full bg-[#E8F8F4] px-3 py-1 text-xs font-semibold text-[#00A384]">
            Internal
          </span>
        </div>

        <p className="mt-3 max-w-3xl text-gray-500">
          A curated network of Teach East&#39;s highest-quality educators,
          continuously maintained and ready for international placement.
        </p>

        <div className="mt-5 flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />

            {today}
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} />

            248 Active Premium Teachers
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium shadow-sm transition hover:bg-gray-50">
          Export
        </button>

        <button className="rounded-xl bg-[#00A384] px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90">
          + Nominate Candidate
        </button>
      </div>
    </div>
  );
}