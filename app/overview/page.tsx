import Link from "next/link";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
  ShieldCheck,
  Users,
  Clock3,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Premium Talent",
    description:
      "Browse Teach East's curated premium educators.",
    href: "/premium-talent",
    icon: Star,
    color: "bg-emerald-500",
  },
  {
    title: "Nominate Candidate",
    description:
      "Submit consultants' nominations for review.",
    href: "/nominations",
    icon: UserPlus,
    color: "bg-sky-500",
  },
  {
    title: "Pending Approvals",
    description:
      "Luke reviews Premium Talent nominations.",
    href: "/pending-approvals",
    icon: ClipboardCheck,
    color: "bg-amber-500",
  },
  {
    title: "Match to Vacancy",
    description:
      "Submit Premium Talent candidates to vacancies.",
    href: "/match",
    icon: Briefcase,
    color: "bg-violet-500",
  },
  {
    title: "Eligibility Rules",
    description:
      "Configure Premium Talent requirements.",
    href: "/settings",
    icon: ShieldCheck,
    color: "bg-teal-500",
  },
];

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB]">
      <div className="mx-auto max-w-7xl px-8 py-10">

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A384]">
            Teach East
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Recruitment Platform
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Premium Talent Module Prototype
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <StatCard
            title="Premium Candidates"
            value="186"
            icon={Users}
            color="text-[#00A384]"
          />

          <StatCard
            title="Pending Approvals"
            value="12"
            icon={Clock3}
            color="text-amber-500"
          />

          <StatCard
            title="Open Vacancies"
            value="84"
            icon={Briefcase}
            color="text-violet-500"
          />

          <StatCard
            title="Matched This Week"
            value="27"
            icon={BarChart3}
            color="text-sky-500"
          />

        </div>

        <div className="mt-14">

          <h2 className="mb-6 text-3xl font-bold">
            Premium Talent Modules
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {modules.map((module) => {

              const Icon = module.icon;

              return (

                <Link
                  key={module.title}
                  href={module.href}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${module.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {module.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {module.description}
                  </p>

                  <div className="mt-8 flex items-center font-semibold text-[#00A384]">

                    Open Module

                    <ArrowRight
                      className="ml-2 transition group-hover:translate-x-1"
                      size={18}
                    />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>
                <div className="mt-16 rounded-3xl bg-[#0F172A] p-10 text-white">

          <h2 className="text-3xl font-bold">
            Premium Talent Workflow
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-5">

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                1
              </div>

              <h3 className="mt-3 font-semibold">
                Nominate
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Consultant submits a Premium Talent nomination.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                2
              </div>

              <h3 className="mt-3 font-semibold">
                Approve
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Luke reviews and approves the nomination.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                3
              </div>

              <h3 className="mt-3 font-semibold">
                Premium Pool
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Candidate joins the Premium Talent database.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                4
              </div>

              <h3 className="mt-3 font-semibold">
                Match
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Match candidates with suitable vacancies.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                5
              </div>

              <h3 className="mt-3 font-semibold">
                Placement
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Candidate is shortlisted for interview.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold">
            Prototype Features
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Premium Talent Pool",
              "Candidate Nominations",
              "Pending Approvals",
              "Match to Vacancy",
              "Candidate Drawer",
              "Eligibility Rules",
              "Vacancy Ownership",
              "Profile Freshness Tracking",
            ].map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
              >

                <div className="h-3 w-3 rounded-full bg-[#00A384]" />

                <span className="font-medium">
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold">
            {value}
          </h3>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 ${color}`}
        >
          <Icon size={28} />
        </div>

      </div>

    </div>
  );
}