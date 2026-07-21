"use client";

import { Clock, ArrowRight } from "lucide-react";

const nominations = [
  {
    name: "Amelia Johnson",
    subject: "Primary",
    consultant: "Luke",
    submitted: "Today",
  },
  {
    name: "Ryan Cooper",
    subject: "Science",
    consultant: "Emma",
    submitted: "Yesterday",
  },
  {
    name: "Charlotte Green",
    subject: "English",
    consultant: "Maroua",
    submitted: "2 days ago",
  },
];

export default function PendingApprovals() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">
          Pending Nominations
        </h2>

        <span className="rounded-full bg-[#FCEAF5] px-3 py-1 text-sm font-semibold text-[#BC2686]">
          {nominations.length}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {nominations.map((candidate) => (
          <div
            key={candidate.name}
            className="rounded-2xl border border-gray-100 p-4 transition hover:border-[#00A384]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {candidate.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {candidate.subject}
                </p>
              </div>

              <Clock
                size={18}
                className="text-[#BC2686]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <span className="text-gray-500">
                  Nominated by
                </span>

                <p className="font-medium">
                  {candidate.consultant}
                </p>
              </div>

              <div className="text-right">
                <span className="text-gray-500">
                  Submitted
                </span>

                <p className="font-medium">
                  {candidate.submitted}
                </p>
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#00A384] py-2 font-semibold text-[#00A384] transition hover:bg-[#00A384] hover:text-white">
              Review Nomination

              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}