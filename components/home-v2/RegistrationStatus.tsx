import { ArrowUpRight, MoreHorizontal } from "lucide-react";

const registrationStatus = [
  {
    candidate: "Emma Carter",
    source: "LinkedIn",
    status: "WhatsApp Sent",
    next: "Waiting Reply",
  },
  {
    candidate: "James Wilson",
    source: "Self Registered",
    status: "Registration Required",
    next: "Book Call",
  },
  {
    candidate: "Sarah Mitchell",
    source: "Email",
    status: "Registration Booked",
    next: "Tomorrow 10:00",
  },
  {
    candidate: "Ahmed Hassan",
    source: "LinkedIn",
    status: "WhatsApp Sent",
    next: "Waiting Reply",
  },
  {
    candidate: "Olivia Brown",
    source: "Email",
    status: "No Response",
    next: "Follow Up",
  },
];

export default function RegistrationStatus() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Registration Status
          </h2>

          <p className="mt-2 text-gray-500">
            Track registration progress and follow-ups for every candidate.
          </p>

        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-[#00A384] transition hover:opacity-80">

          View Queue

          <ArrowUpRight size={16} />

        </button>

      </div>

      <div className="overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">

              <th className="px-6 py-4">
                Candidate
              </th>

              <th className="px-6 py-4">
                Source
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4">
                Next Action
              </th>

              <th className="w-16 px-6 py-4" />

            </tr>

          </thead>

          <tbody>

            {registrationStatus.map((candidate) => (

              <tr
                key={candidate.candidate}
                className="border-t border-gray-100 transition hover:bg-[#F8FFFD]"
              >

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {candidate.candidate}
                </td>

                <td className="px-6 py-5">

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {candidate.source}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      candidate.status === "Registration Booked"
                        ? "bg-[#E8F8F4] text-[#00A384]"
                        : candidate.status === "Registration Required"
                        ? "bg-amber-100 text-amber-700"
                        : candidate.status === "No Response"
                        ? "bg-red-100 text-red-700"
                        : "bg-[#EEF4FF] text-[#2563EB]"
                    }`}
                  >
                    {candidate.status}
                  </span>

                </td>

                <td className="px-6 py-5 text-gray-600">
                  {candidate.next}
                </td>

                <td className="px-6 py-5 text-right">

                  <button className="rounded-lg p-2 transition hover:bg-gray-100">

                    <MoreHorizontal
                      size={18}
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