"use client";

import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";

const nominations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    photo: "/avatars/candidate-01.jpg",
    role: "Primary Teacher",
    consultant: "Luke Thompson",
    subject: "Primary",
    submitted: "Today",
  },
  {
    id: 2,
    name: "Emma Carter",
    photo: "/avatars/candidate-02.jpg",
    role: "English Teacher",
    consultant: "Maroua Benchikh",
    subject: "English",
    submitted: "Yesterday",
  },
  {
    id: 3,
    name: "Daniel Roberts",
    photo: "/avatars/candidate-11.jpg",
    role: "Physics Teacher",
    consultant: "Emma Green",
    subject: "Science",
    submitted: "2 days ago",
  },
];

export default function PendingApprovalsPage() {
  return (
    <div className="space-y-5">

      {nominations.map((candidate) => (

        <div
          key={candidate.id}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">

              <Image
                src={candidate.photo}
                alt={candidate.name}
                width={70}
                height={70}
                className="rounded-full"
              />

              <div>

                <h2 className="text-xl font-bold">
                  {candidate.name}
                </h2>

                <p className="text-gray-500">
                  {candidate.role}
                </p>

                <div className="mt-3 flex gap-4 text-sm text-gray-500">

                  <span>
                    Subject:
                    <strong className="ml-1 text-gray-900">
                      {candidate.subject}
                    </strong>
                  </span>

                  <span>
                    Consultant:
                    <strong className="ml-1 text-gray-900">
                      {candidate.consultant}
                    </strong>
                  </span>

                  <span>
                    Submitted:
                    <strong className="ml-1 text-gray-900">
                      {candidate.submitted}
                    </strong>
                  </span>

                </div>

              </div>

            </div>

            <div className="flex gap-3">

              <button className="rounded-xl border border-gray-200 px-5 py-3 hover:bg-gray-50">

                <Eye size={18} />

              </button>

              <button className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600">

                <XCircle size={18} />

                Reject

              </button>

              <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-5 py-3 font-semibold text-white hover:bg-[#008d73]">

                <CheckCircle2 size={18} />

                Approve

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}