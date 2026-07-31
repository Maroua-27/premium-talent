import {
  Briefcase,
  UserPlus,
  Sparkles,
} from "lucide-react";

export default function HomeHeader() {
  return (
    <section>

      {/* Small label */}

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00A384]">
        Teach East Recruitment Platform
      </p>

      {/* Main header */}

      <div className="mt-5 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Good Morning 👋
          </h1>

          <h2 className="mt-2 text-2xl font-semibold text-gray-700">
            Consultant Dashboard
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">

            <span className="rounded-full bg-[#E8F8F4] px-4 py-2 font-medium text-[#00A384]">
              Tuesday, 28 July
            </span>

            <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700">

              <Sparkles size={15} />

              18 new applications since yesterday

            </span>

          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Everything happening across your vacancies over the last 24 hours,
            along with your upcoming interviews, meetings and priorities.
          </p>

        </div>

        {/* Actions */}

        <div className="flex gap-3">

          <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-[#00A384] hover:bg-[#F8FFFD]">

            <Briefcase size={18} />

            Add Job

          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-[#00A384] px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90">

            <UserPlus size={18} />

            Add Candidate

          </button>

        </div>

      </div>

    </section>
  );
}