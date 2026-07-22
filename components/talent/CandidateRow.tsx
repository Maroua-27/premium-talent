import Image from "next/image";
import { MoreHorizontal, Plus } from "lucide-react";

import { Candidate } from "@/types/candidate";

import CandidateScore from "./CandidateScore";
import AvailabilityBadge from "./AvailabilityBadge";
import BarrierBadge from "./BarrierBadge";

interface Props {
  candidate: Candidate;
  onOpen: () => void;
}

export default function CandidateRow({
  candidate,
  onOpen,
}: Props) {
  const expired = candidate.profileDaysRemaining <= 0;

  return (
    <tr
      className={`border-b border-gray-100 transition hover:bg-slate-50 ${
        expired ? "bg-red-50/40" : ""
      }`}
    >
      {/* Candidate */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <Image
            src={candidate.avatar}
            alt={candidate.name}
            width={52}
            height={52}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              {candidate.name}
            </h3>

            <p className="text-sm text-gray-500">
              {candidate.role}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <Image
                src={candidate.nationalityFlag}
                alt={candidate.nationality}
                width={18}
                height={12}
                className="rounded-sm border"
              />

              <span className="text-xs text-gray-600">
                {candidate.nationality}
              </span>

              <span className="text-gray-300">•</span>

              <span className="text-xs font-medium text-[#00A384]">
                {candidate.curriculum} Curriculum
              </span>
            </div>
          </div>
        </div>
      </td>

      {/* Profile */}
      <td>
        <CandidateScore
          days={candidate.profileDaysRemaining}
        />
      </td>

      {/* Subject */}
      <td>
        <span className="rounded-full bg-[#E8F8F4] px-3 py-1 text-sm font-medium text-[#00A384]">
          {candidate.subject}
        </span>
      </td>

      {/* Availability */}
      <td>
        <AvailabilityBadge
          availability={candidate.availability}
        />
      </td>

      {/* Location */}
      <td>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image
            src={candidate.currentLocationFlag}
            alt={candidate.currentLocation}
            width={22}
            height={16}
            className="rounded-sm border"
          />

          <span className="text-sm">
            {candidate.currentLocation}
          </span>
        </div>
      </td>

      {/* Salary */}
      <td className="whitespace-nowrap text-right font-semibold">
        {candidate.expectedSalary}
      </td>

      {/* Barrier */}
      <td>
        <BarrierBadge
          barrier={candidate.placementBarrier}
        />
      </td>

      {/* Updated */}
      <td className="whitespace-nowrap text-sm text-gray-500">
        {candidate.lastUpdated}
      </td>

      {/* Actions */}
      <td>
        {expired ? (
          <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
            Update Profile
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
              <Plus size={16} />
              Match
            </button>

            <button
              onClick={onOpen}
              className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}