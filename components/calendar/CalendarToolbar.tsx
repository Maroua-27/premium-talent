"use client";

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
} from "lucide-react";

export default function CalendarToolbar() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-wrap items-center gap-3">

          <button className="rounded-xl border border-gray-200 bg-white p-2 transition hover:bg-gray-50">

            <ChevronLeft size={18} />

          </button>

          <button className="rounded-xl border border-gray-200 bg-white p-2 transition hover:bg-gray-50">

            <ChevronRight size={18} />

          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-medium transition hover:bg-gray-50">

            Today

          </button>

          <div className="ml-2">

            <h2 className="text-xl font-bold text-gray-900">
              October 26 – November 1, 2026
            </h2>

            <p className="text-sm text-gray-500">
              Week View
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">

          <div className="relative">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search candidate, client or event..."
              className="w-72 rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#00A384]"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-medium transition hover:bg-gray-50">

            <Filter size={16} />

            Filters

          </button>

          <button className="rounded-xl bg-[#00A384] px-5 py-2.5 font-semibold text-white transition hover:opacity-90">

            Week

          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-medium transition hover:bg-gray-50">

            Month

          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-medium transition hover:bg-gray-50">

            Day

          </button>

        </div>

      </div>

    </section>
  );
}