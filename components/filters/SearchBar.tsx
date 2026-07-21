"use client";

import {
  Search,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

export default function SearchBar() {
  return (
    <div className="space-y-5">

      {/* Search */}

      <div className="flex items-center justify-between gap-5">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search teacher, subject, location..."
            className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition focus:border-[#00A384]"
          />

        </div>

        <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition hover:bg-gray-50">

          <SlidersHorizontal size={18} />

          Filters

        </button>

      </div>

      {/* Filters */}

      <div className="flex flex-wrap items-center gap-3">

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Subject</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Availability</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Current Location</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Curriculum</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Placement Barrier</option>
        </select>

        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <option>Profile Status</option>
        </select>

        <button className="ml-auto flex items-center gap-2 text-sm font-medium text-[#00A384]">

          <RotateCcw size={16} />

          Clear Filters

        </button>

      </div>

      {/* Result Count */}

      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold">8</span> Premium Teachers
        </p>

        <div className="flex items-center gap-3">

          <span className="text-sm text-gray-500">
            Sort by
          </span>

          <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <option>Recently Updated</option>
            <option>Profile Status</option>
            <option>Availability</option>
            <option>Subject</option>
            <option>Current Location</option>
          </select>

        </div>

      </div>

    </div>
  );
}