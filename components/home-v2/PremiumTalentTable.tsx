import { ArrowUpRight, MoreHorizontal, Star } from "lucide-react";

const premiumCandidates = [
  {
    candidate: "Emma Carter",
    subject: "Primary Teacher",
    score: "98%",
    consultant: "Luke",
  },
  {
    candidate: "Daniel Roberts",
    subject: "ICT Teacher",
    score: "94%",
    consultant: "Lubna",
  },
  {
    candidate: "Sarah Mitchell",
    subject: "English Teacher",
    score: "96%",
    consultant: "Neve",
  },
  {
    candidate: "Ahmed Hassan",
    subject: "Science Teacher",
    score: "92%",
    consultant: "Luke",
  },
];

export default function PremiumTalentTable() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            Premium Talent
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Top candidates ready for consultant shortlists.
          </p>

        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-[#00A384] transition hover:opacity-80">

          View Pool

          <ArrowUpRight size={16} />

        </button>

      </div>

      <div className="overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">

              <th className="px-5 py-4">
                Candidate
              </th>

              <th className="px-5 py-4">
                Subject
              </th>

              <th className="px-5 py-4">
                Match
              </th>

              <th className="px-5 py-4">
                Consultant
              </th>

              <th className="w-12 px-5 py-4" />

            </tr>

          </thead>

          <tbody>

            {premiumCandidates.map((candidate) => (

              <tr
                key={candidate.candidate}
                className="border-t border-gray-100 transition hover:bg-[#F8FFFD]"
              >

                <td className="px-5 py-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-[#FFF8E6] p-2">

                      <Star
                        size={15}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />

                    </div>

                    <span className="font-semibold text-gray-900">
                      {candidate.candidate}
                    </span>

                  </div>

                </td>

                <td className="px-5 py-5 text-gray-600">
                  {candidate.subject}
                </td>

                <td className="px-5 py-5">

                  <span className="rounded-full bg-[#E8F8F4] px-3 py-1 text-xs font-semibold text-[#00A384]">
                    {candidate.score} Match
                  </span>

                </td>

                <td className="px-5 py-5 text-gray-600">
                  {candidate.consultant}
                </td>

                <td className="px-5 py-5 text-right">

                  <button className="rounded-lg p-2 transition hover:bg-gray-100">

                    <MoreHorizontal
                      size={17}
                      className="text-gray-500"
                    />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}