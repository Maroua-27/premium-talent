import Link from "next/link";
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
            Premium Talent Module
          </h1>

          <span className="rounded-full bg-[#E8F8F4] px-3 py-1 text-xs font-semibold text-[#00A384]">
            Internal
          </span>

        </div>

        <p className="mt-3 max-w-3xl text-gray-500">
          A curated network of Teach East&apos;s highest-quality educators,
          continuously maintained, reviewed every 40 days and ready for
          international placement.
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

      <Link
        href="/nominations"
        className="rounded-xl bg-[#00A384] px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        + Add Candidate
      </Link>

    </div>
  );
}