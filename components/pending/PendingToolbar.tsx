"use client";

import { Search, Filter, CheckCircle2, Clock, XCircle } from "lucide-react";

export default function PendingToolbar() {
  return (
    <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Pending Approvals
          </h2>

          <p className="mt-1 text-gray-500">
            Review candidate nominations before adding them to the Premium Talent Programme.
          </p>

        </div>

        <div className="flex gap-3">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search candidate..."
              className="w-72 rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-[#00A384]"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 hover:bg-gray-50">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <StatCard
          title="Waiting"
          value="18"
          icon={<Clock size={20} />}
          colour="bg-yellow-100 text-yellow-700"
        />

        <StatCard
          title="Approved Today"
          value="9"
          icon={<CheckCircle2 size={20} />}
          colour="bg-green-100 text-green-700"
        />

        <StatCard
          title="Rejected"
          value="2"
          icon={<XCircle size={20} />}
          colour="bg-red-100 text-red-700"
        />

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  colour,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  colour: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

        </div>

        <div className={`rounded-xl p-3 ${colour}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}