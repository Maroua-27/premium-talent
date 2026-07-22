"use client";

import PendingToolbar from "./PendingToolbar";
import PendingApprovalCard from "./PendingApprovalCard";

const pendingCandidates = [
  {
    id: 1,
    candidateName: "Sarah Mitchell",
    subject: "Primary Teacher",
    submittedBy: "Naima",
    submittedDate: "21 Jul 2026",
  },
  {
    id: 2,
    candidateName: "Emma Carter",
    subject: "English Teacher",
    submittedBy: "Lubna",
    submittedDate: "20 Jul 2026",
  },
  {
    id: 3,
    candidateName: "Olivia Thompson",
    subject: "Science Teacher",
    submittedBy: "Neve",
    submittedDate: "20 Jul 2026",
  },
  {
    id: 4,
    candidateName: "James Wilson",
    subject: "ICT Teacher",
    submittedBy: "Luke",
    submittedDate: "19 Jul 2026",
  },
];

export default function PendingApprovalsPage() {
  return (
    <div className="space-y-8">

      <PendingToolbar />

      <div className="grid gap-6">

        {pendingCandidates.map((candidate) => (

          <PendingApprovalCard
            key={candidate.id}
            candidateName={candidate.candidateName}
            subject={candidate.subject}
            submittedBy={candidate.submittedBy}
            submittedDate={candidate.submittedDate}
          />

        ))}

      </div>

    </div>
  );
}