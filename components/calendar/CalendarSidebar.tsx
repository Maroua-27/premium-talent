"use client";

import {
  Phone,
  UserRound,
  Building2,
  BadgeDollarSign,
  FileCheck,
  Plane,
  Flag,
  ArrowRight,
} from "lucide-react";

const quickActions = [
  {
    title: "Registration Call",
    icon: Phone,
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Candidate Interview",
    icon: UserRound,
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Client Meeting",
    icon: Building2,
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    title: "Offer Call",
    icon: BadgeDollarSign,
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "Reference Check",
    icon: FileCheck,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "Visa Appointment",
    icon: Plane,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
];


const deadlines = [
  {
    title: "Primary Teacher Shortlist",
    due: "Today",
    color: "bg-red-500",
  },
  {
    title: "Offer Expiry",
    due: "Tomorrow",
    color: "bg-orange-500",
  },
  {
    title: "Reference Check",
    due: "Friday",
    color: "bg-amber-500",
  },
];

export default function CalendarSidebar() {
  return (
    <div className="space-y-6">

      {/* Quick Actions */}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-gray-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Create common recruitment events instantly.
        </p>

        <div className="mt-6 space-y-3">

          {quickActions.map((action) => {

            const Icon = action.icon;

            return (

              <button
                key={action.title}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 transition hover:shadow-sm ${action.color}`}
              >

                <div className="flex items-center gap-3">

                  <Icon size={18} />

                  <span className="text-sm font-semibold">
                    {action.title}
                  </span>

                </div>

                <ArrowRight size={16} />

              </button>

            );

          })}

        </div>

      </section>

      {/* Deadlines */}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold text-gray-900">
            Upcoming Deadlines
          </h2>

          <Flag
            size={18}
            className="text-gray-400"
          />

        </div>

        <div className="mt-6 space-y-4">

          {deadlines.map((item) => (

            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4"
            >

              <div
                className={`h-3 w-3 rounded-full ${item.color}`}
              />

              <div className="flex-1">

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Due {item.due}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}