import Link from "next/link";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const pages = [
  {
    title: "Premium Talent Pool",
    description:
      "Browse Teach East's curated premium educators ready for international placement.",
    href: "/premium-talent",
    icon: Star,
    color: "bg-emerald-500",
  },
  {
    title: "Nominate Candidate",
    description:
      "Submit a consultant nomination into the Premium Talent Programme.",
    href: "/nominations",
    icon: UserPlus,
    color: "bg-sky-500",
  },
  {
    title: "Pending Approvals",
    description:
      "Review and approve consultant nominations before they enter the Premium Talent Pool.",
    href: "/pending-approvals",
    icon: ClipboardCheck,
    color: "bg-amber-500",
  },
  {
    title: "Match to Vacancy",
    description:
      "Match Premium Talent candidates to suitable vacancies.",
    href: "/match",
    icon: Briefcase,
    color: "bg-violet-500",
  },
  {
    title: "Eligibility Rules",
    description:
      "Configure Premium Talent eligibility requirements.",
    href: "/settings",
    icon: ShieldCheck,
    color: "bg-teal-500",
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
            Premium Talent Demo
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Interactive prototype demonstrating Teach East&#39;s Premium Talent workflow
            from consultant nomination through approval, matching and placement.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {pages.map((page) => {

            const Icon = page.icon;

            return (

              <Link
                key={page.title}
                href={page.href}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${page.color}`}
                >
                  <Icon size={26} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {page.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {page.description}
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

        {/* Workflow */}

        <div className="mt-20 rounded-3xl bg-[#0F172A] p-10 text-white">

          <h2 className="text-3xl font-bold">
            Premium Talent Workflow
          </h2>

          <p className="mt-3 text-gray-300">
            End-to-end process for identifying, approving and placing Teach East&#39;s highest-quality candidates.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-5">

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                1
              </div>

              <h3 className="mt-4 font-semibold">
                Nominate Candidate
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Consultants submit exceptional teachers for Premium Talent.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                2
              </div>

              <h3 className="mt-4 font-semibold">
                Manager Approval
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Manager reviews Premium Talent nominations.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                3
              </div>

              <h3 className="mt-4 font-semibold">
                Premium Talent Pool
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Approved candidates become part of the exclusive talent pool.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                4
              </div>

              <h3 className="mt-4 font-semibold">
                Match to Vacancy
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Recruiters match Premium Talent with suitable vacancies.
              </p>

            </div>

            <div>

              <div className="text-5xl font-bold text-[#00A384]">
                5
              </div>

              <h3 className="mt-4 font-semibold">
                Client Submission
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                The shortlisted candidate is submitted to the client school.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}