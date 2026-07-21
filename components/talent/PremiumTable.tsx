import { candidates } from "@/data/candidates";
import CandidateRow from "./CandidateRow";

export default function PremiumTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
            <th className="px-6 py-4">Candidate</th>

            <th>Profile Status</th>

            <th>Subject</th>

            <th>Availability</th>

            <th>Current Location</th>

            <th>Expected Salary</th>

            <th>Placement Barrier</th>

            <th>Updated</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate) => (
            <CandidateRow
              key={candidate.id}
              candidate={candidate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}