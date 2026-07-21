"use client";

import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="relative w-[420px]">
        <Search
          className="absolute left-4 top-3.5 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search candidates..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#00A384]"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative rounded-xl border border-gray-200 p-3 hover:bg-gray-50">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#BC2686]" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00A384] text-white font-bold">
            M
          </div>

          <div>
            <div className="font-semibold">
              Maroua
            </div>

            <div className="text-sm text-gray-500">
              Marketing Manager
            </div>
          </div>

          <ChevronDown
            size={18}
            className="text-gray-500"
          />
        </div>
      </div>
    </header>
  );
}