import Link from "next/link";
import {
  
  LayoutDashboard,
  CalendarDays,
  CheckSquare,
  Users,
  ArrowRight,
} from "lucide-react";

const updates = [
  {
    title: "Personalised Dashboards",
    description:
      "Dedicated workspaces designed for different user roles with relevant insights and shortcuts.",
    icon: LayoutDashboard,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Recruitment Calendar",
    description:
      "A redesigned calendar with quick actions, improved scheduling and a cleaner user experience.",
    icon: CalendarDays,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Task Management",
    description:
      "A refreshed task workspace focused on recruiter productivity and day-to-day follow-up.",
    icon: CheckSquare,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Improved Recruitment Workflow",
    description:
      "Ongoing improvements across candidate management, matching, interviews and placement.",
    icon: Users,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F8FB]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-8 py-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A384]">
            Teach East
          </p>

          <h1 className="mt-4 text-6xl font-bold text-gray-900">
            System Updates
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Welcome to the latest version of the Teach East recruitment platform.
            Below is a summary of the newest improvements and enhancements
            currently available throughout the system.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {updates.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-16 flex justify-center">

          <Link
            href="/calendar"
            className="group inline-flex items-center rounded-2xl bg-[#00A384] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#009276]"
          >
            Launch Platform

            <ArrowRight
              size={20}
              className="ml-3 transition group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </main>
  );
}