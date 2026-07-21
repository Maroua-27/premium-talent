import Link from "next/link";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
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
      "Review and approve consultant nominations before they enter the pool.",
    href: "/pending-approvals",
    icon: ClipboardCheck,
    color: "bg-amber-500",
  },
  {
    title: "Match to Vacancy",
    description:
      "Quickly review premium candidates and submit them to suitable vacancies.",
    href: "/match",
    icon: Briefcase,
    color: "bg-violet-500",
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
            Interactive prototype showcasing how Teach East could manage,
            review and match its highest-quality teachers for international
            schools.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

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
                  Open Demo
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={18}
                  />
                </div>
              </Link>
            );
          })}

        </div>

        <div className="mt-20 rounded-3xl bg-[#0F172A] p-10 text-white">

          <h3 className="text-3xl font-bold">
            Prototype Workflow
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-4">

            <div>
              <div className="text-5xl font-bold text-[#00A384]">1</div>
              <p className="mt-3 font-semibold">Nominate</p>
              <p className="mt-2 text-sm text-gray-300">
                Consultant submits a candidate.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#00A384]">2</div>
              <p className="mt-3 font-semibold">Approve</p>
              <p className="mt-2 text-sm text-gray-300">
                Manager reviews and approves.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#00A384]">3</div>
              <p className="mt-3 font-semibold">Pool</p>
              <p className="mt-2 text-sm text-gray-300">
                Candidate becomes part of the Premium Talent Programme.
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[#00A384]">4</div>
              <p className="mt-3 font-semibold">Match</p>
              <p className="mt-2 text-sm text-gray-300">
                Submit premium teachers to suitable vacancies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}