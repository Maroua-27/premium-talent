import { ArrowUpRight, MoreHorizontal } from "lucide-react";

const requests = [
  {
    id: "TE-4821",
    vacancy: "Mathematics Teacher",
    country: "🇲🇾 Malaysia",
    suggestions: 3,
    consultant: "Luke",
    deadline: "30 Jul 2026",
  },
  {
    id: "TE-4818",
    vacancy: "Head of English",
    country: "🇦🇪 UAE",
    suggestions: 5,
    consultant: "Lubna",
    deadline: "31 Jul 2026",
  },
  {
    id: "TE-4745",
    vacancy: "Primary Teacher",
    country: "🇹🇭 Thailand",
    suggestions: 2,
    consultant: "Neve",
    deadline: "01 Aug 2026",
  },
  {
    id: "TE-4762",
    vacancy: "Science Teacher",
    country: "🇻🇳 Vietnam",
    suggestions: 4,
    consultant: "Luke",
    deadline: "03 Aug 2026",
  },
  {
    id: "TE-4802",
    vacancy: "Head of Mathematics",
    country: "🇸🇦 Saudi Arabia",
    suggestions: 6,
    consultant: "Naima",
    deadline: "04 Aug 2026",
  },
  {
    id: "TE-4791",
    vacancy: "Early Years Teacher",
    country: "🇶🇦 Qatar",
    suggestions: 1,
    consultant: "Naima",
    deadline: "05 Aug 2026",
  },
  {
  id: "TE-4774",
  vacancy: "Secondary English Teacher",
  country: "🇴🇲 Oman",
  suggestions: 2,
  consultant: "Naima",
  deadline: "06 Aug 2026",
},
{
  id: "TE-4769",
  vacancy: "Physics Teacher",
  country: "🇰🇼 Kuwait",
  suggestions: 3,
  consultant: "Luke",
  deadline: "07 Aug 2026",
},
];

export default function ConsultantRequests() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            Consultant Requests
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Vacancies currently waiting for candidate suggestions.
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
              Job ID
            </th>

            <th className="px-5 py-4">
              Vacancy
            </th>

            <th className="px-5 py-4">
              Country
            </th>

            <th className="px-5 py-4">
              Suggestions
            </th>

            <th className="px-5 py-4">
              Consultant
            </th>

            <th className="px-5 py-4">
              Deadline
            </th>

            <th className="w-12 px-5 py-4" />

          </tr>

        </thead>

        <tbody>

          {requests.map((request) => (

            <tr
              key={request.id}
              className="border-t border-gray-100 transition hover:bg-[#F8FFFD]"
            >

              <td className="px-5 py-5 font-mono text-sm text-gray-500">
                {request.id}
              </td>

              <td className="px-5 py-5 font-semibold text-gray-900">
                {request.vacancy}
              </td>

              <td className="px-5 py-5 text-gray-600">
                {request.country}
              </td>

              <td className="px-5 py-6">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    request.suggestions >= 5
                      ? "bg-red-100 text-red-700"
                      : request.suggestions >= 3
                      ? "bg-amber-100 text-amber-700"
                      : "bg-[#E8F8F4] text-[#00A384]"
                  }`}
                >
                  {request.suggestions} Needed
                </span>

              </td>

              <td className="px-5 py-5 text-gray-700">
                {request.consultant}
              </td>

              <td className="px-5 py-5 text-gray-500">
                {request.deadline}
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

    </section>
  );
}