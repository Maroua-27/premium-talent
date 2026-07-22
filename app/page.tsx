import Link from "next/link";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
  ArrowRight,
  Users,
 School,
  FileText,
  BarChart3,
  Bell,
  Settings,
  Building2,
  CalendarDays,
} from "lucide-react";

const pages = [
  {
    title: "Premium Talent Pool",
    description:
      "Browse Teach East's curated premium educators ready for international placement.",
    href: "/premium-talent",
    icon: Star,
    color: "bg-emerald-500",
    live: true,
  },
  {
    title: "Nominate Candidate",
    description:
      "Submit a consultant nomination into the Premium Talent Programme.",
    href: "/nominations",
    icon: UserPlus,
    color: "bg-sky-500",
    live: true,
  },
  {
    title: "Pending Approvals",
    description:
      "Luke reviews and approves Premium Talent nominations.",
    href: "/pending-approvals",
    icon: ClipboardCheck,
    color: "bg-amber-500",
    live: true,
  },
  {
    title: "Match to Vacancy",
    description:
      "Match Premium Talent candidates to suitable vacancies.",
    href: "/match",
    icon: Briefcase,
    color: "bg-violet-500",
    live: true,
  },
  {
    title: "Overview",
    description:
      "Platform overview and workflow.",
    href: "/overview",
    icon: BarChart3,
    color: "bg-cyan-500",
    live: true,
  },

  // Future Modules

  {
    title: "Candidates",
    description:
      "Complete Teach East candidate database.",
    href: "#",
    icon: Users,
    color: "bg-slate-500",
    live: false,
  },
  {
    title: "Vacancies",
    description:
      "Manage vacancies and consultant assignments.",
    href: "#",
    icon: FileText,
    color: "bg-rose-500",
    live: false,
  },
  {
    title: "Schools",
    description:
      "Partner schools and recruitment history.",
    href: "#",
    icon: School,
    color: "bg-indigo-500",
    live: false,
  },
  {
    title: "Clients",
    description:
      "Client schools and relationships.",
    href: "#",
    icon: Building2,
    color: "bg-pink-500",
    live: false,
  },
  {
    title: "Interviews",
    description:
      "Interview scheduling and feedback.",
    href: "#",
    icon: CalendarDays,
    color: "bg-orange-500",
    live: false,
  },
  {
    title: "Analytics",
    description:
      "Recruitment insights and reporting.",
    href: "#",
    icon: BarChart3,
    color: "bg-cyan-500",
    live: false,
  },
  {
    title: "Notifications",
    description:
      "Approvals, reminders and activity.",
    href: "#",
    icon: Bell,
    color: "bg-yellow-500",
    live: false,
  },
  {
    title: "Settings",
    description:
      "Platform settings and permissions.",
    href: "#",
    icon: Settings,
    color: "bg-gray-600",
    live: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F8FB]">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A384]">
            Teach East
          </p>

          <h1 className="mt-4 text-6xl font-bold text-gray-900">
            Recruitment Platform
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Interactive prototype showcasing Teach East&#39;s Premium Talent
            recruitment workflow from nomination through placement.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {pages.map((page) => {
            const Icon = page.icon;

            return (
              <div
                key={page.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${page.color}`}
                >
                  <Icon size={26} />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {page.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {page.description}
                                </p>

                <div className="mt-8">

                  {page.live ? (

                    <Link
                      href={page.href}
                      className="inline-flex items-center font-semibold text-[#00A384]"
                    >
                      Open Module

                      <ArrowRight
                        className="ml-2 transition group-hover:translate-x-1"
                        size={18}
                      />

                    </Link>

                  ) : (

                    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500">
                      Coming Soon
                    </span>

                  )}

                </div>

              </div>

            );
          })}

        </div>

        <div className="mt-20 rounded-3xl bg-[#0F172A] p-10 text-white">

          <h2 className="text-3xl font-bold">
            Premium Talent Workflow
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-4">

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                1
              </div>

              <h3 className="mt-4 font-semibold">
                Nominate
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Consultants nominate outstanding candidates.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                2
              </div>

              <h3 className="mt-4 font-semibold">
                Approve
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Luke reviews and approves Premium Talent nominations.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                3
              </div>

              <h3 className="mt-4 font-semibold">
                Premium Pool
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Candidates become part of the verified Premium Talent Pool.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                4
              </div>

              <h3 className="mt-4 font-semibold">
                Match
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Premium teachers are matched to the best vacancies.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}