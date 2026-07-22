"use client";

import {
  CheckCircle2,
  XCircle,
  Clock3,
  User,
  Calendar,
  FileText,
} from "lucide-react";

const history = [
  {
    id: 1,
    candidate: "Sarah Mitchell",
    action: "Approved",
    by: "Luke",
    date: "22 Jul 2026 • 10:42",
    note: "Excellent profile. Ready for premium pool.",
  },
  {
    id: 2,
    candidate: "Emma Carter",
    action: "Rejected",
    by: "Luke",
    date: "22 Jul 2026 • 09:15",
    note: "Salary expectations currently too high.",
  },
  {
    id: 3,
    candidate: "James Wilson",
    action: "Approved",
    by: "Luke",
    date: "21 Jul 2026 • 16:58",
    note: "Strong ICT profile with IB experience.",
  },
  {
    id: 4,
    candidate: "Olivia Thompson",
    action: "Pending Update",
    by: "Luke",
    date: "20 Jul 2026 • 14:30",
    note: "Waiting for notice period confirmation.",
  },
];

export default function ApprovalHistoryPage() {
  return (
    <main className="mx-auto max-w-7xl">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Approval History
        </h1>

        <p className="mt-3 text-gray-500">
          Complete history of Premium Talent approval decisions.
        </p>

      </div>

      <div className="space-y-5">

        {history.map((item) => (

          <div
            key={item.id}
            className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {item.candidate}
                </h2>

                <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">

                  <div className="flex items-center gap-2">

                    <User size={16} />

                    {item.by}

                  </div>

                  <div className="flex items-center gap-2">

                    <Calendar size={16} />

                    {item.date}

                  </div>

                </div>

              </div>

              {item.action === "Approved" && (
                <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                  <CheckCircle2 size={18} />
                  Approved
                </span>
              )}

              {item.action === "Rejected" && (
                <span className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 font-semibold text-red-700">
                  <XCircle size={18} />
                  Rejected
                </span>
              )}

              {item.action === "Pending Update" && (
                <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                  <Clock3 size={18} />
                  Pending Update
                </span>
              )}

            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">

              <div className="mb-2 flex items-center gap-2">

                <FileText size={18} />

                <span className="font-semibold">
                  Manager Note
                </span>

              </div>

              <p className="text-gray-600">
                {item.note}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}