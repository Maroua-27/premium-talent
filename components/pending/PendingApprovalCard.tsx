"use client";

import {
  CheckCircle2,
  XCircle,
  MessageSquare,
  User,
  Calendar,
} from "lucide-react";

interface PendingApprovalCardProps {
  candidateName: string;
  subject: string;
  submittedBy: string;
  submittedDate: string;
}

export default function PendingApprovalCard({
  candidateName,
  subject,
  submittedBy,
  submittedDate,
}: PendingApprovalCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            {candidateName}
          </h2>

          <p className="mt-1 text-gray-500">
            {subject}
          </p>

        </div>

        <div className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          Pending Luke&#39;s Approval
        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div className="flex items-center gap-3">

          <User
            size={18}
            className="text-[#00A384]"
          />

          <div>

            <p className="text-xs uppercase text-gray-400">
              Submitted By
            </p>

            <p className="font-semibold">
              {submittedBy}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Calendar
            size={18}
            className="text-[#00A384]"
          />

          <div>

            <p className="text-xs uppercase text-gray-400">
              Submitted On
            </p>

            <p className="font-semibold">
              {submittedDate}
            </p>

          </div>

        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#00A384] py-4 font-semibold text-white transition hover:bg-[#00866d]">

          <CheckCircle2 size={20} />

          Approve

        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">

          <XCircle size={20} />

          Reject

        </button>

      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border py-4 font-semibold hover:bg-gray-50">

        <MessageSquare size={18} />

        Add Note

      </button>

    </div>
  );
}