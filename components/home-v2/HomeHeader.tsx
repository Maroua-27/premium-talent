import {
  CalendarPlus,
  Plus,
} from "lucide-react";

export default function HomeHeader() {
  return (
    <section>

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Good Morning 👋
          </h1>

          <p className="mt-2 text-2xl font-semibold text-gray-700">
            Resourcer Dashboard
          </p>

          <div className="mt-5 flex items-center gap-6 text-sm">

            <span className="rounded-full bg-[#E8F8F4] px-3 py-1 font-medium text-[#00A384]">
              Tuesday, 28 July
            </span>

            <span className="font-medium text-[#2563EB]">
              18 self-registered candidates awaiting registration
            </span>

          </div>

          <p className="mt-6 max-w-3xl text-gray-600">
            Stay on top of your candidate pipeline,
            registration calls, consultant requests
            and compliance activity from one place.
          </p>

        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium shadow-sm transition hover:bg-gray-50">

            <CalendarPlus size={18} />

            Schedule Call

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-90">

            <Plus size={18} />

            Add Candidate

          </button>

        </div>

      </div>

    </section>
  );
}