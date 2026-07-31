import { ArrowUpRight, MoreHorizontal } from "lucide-react";

const compliance = [
  {
    candidate: "Daniel Roberts",
    requirement: "Reference Check",
    due: "30 Jul 2026",
    status: "Pending",
  },
  {
    candidate: "Sarah Mitchell",
    requirement: "Police Clearance",
    due: "31 Jul 2026",
    status: "Pending",
  },
  {
    candidate: "Emma Carter",
    requirement: "Qualification Check",
    due: "01 Aug 2026",
    status: "Pending",
  },
  {
    candidate: "James Wilson",
    requirement: "Reference Check",
    due: "28 Jul 2026",
    status: "Overdue",
  },
];

export default function ComplianceTable() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            Compliance Outstanding
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Candidates awaiting mandatory documents.
          </p>

        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-[#00A384] hover:opacity-80">

          View All

          <ArrowUpRight size={16} />

        </button>

      </div>

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">

            <th className="px-5 py-4">
              Candidate
            </th>

            <th className="px-5 py-4">
              Requirement
            </th>

            <th className="px-5 py-4">
              Due
            </th>

            <th className="px-5 py-4">
              Status
            </th>

            <th className="w-12 px-5 py-4" />

          </tr>

        </thead>

        <tbody>

          {compliance.map((item) => (

            <tr
              key={item.candidate}
              className="border-t border-gray-100 hover:bg-[#F8FFFD]"
            >

              <td className="px-5 py-5 font-semibold text-gray-900">
                {item.candidate}
              </td>

              <td className="px-5 py-5 text-gray-600">
                {item.requirement}
              </td>

              <td className="px-5 py-5 text-gray-500">
                {item.due}
              </td>

              <td className="px-5 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Overdue"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td className="px-5 py-5 text-right">

                <button className="rounded-lg p-2 hover:bg-gray-100">

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

    </section>
  );
}