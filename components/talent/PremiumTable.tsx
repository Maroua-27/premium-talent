"use client";

import { useState } from "react";

import { candidates } from "@/data/candidates";
import { Candidate } from "@/types/candidate";

import CandidateRow from "./CandidateRow";
import CandidateDrawer from "./CandidateDrawer";

export default function PremiumTable() {
  const [selectedCandidate, setSelectedCandidate] =
    useState<Candidate | null>(null);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  function openCandidate(candidate: Candidate) {
    setSelectedCandidate(candidate);
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <>
      <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">

        <table className="min-w-[1550px] w-full table-fixed">

          <colgroup>
            <col className="w-[340px]" />
            <col className="w-[90px]" />
            <col className="w-[110px]" />
            <col className="w-[140px]" />
            <col className="w-[170px]" />
            <col className="w-[110px]" />
            <col className="w-[170px]" />
            <col className="w-[90px]" />
            <col className="w-[170px]" />
          </colgroup>

          <thead className="border-b bg-gray-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500">

              <th className="px-6 py-4">
                Candidate
              </th>

              <th className="px-3 py-4">
                Profile
              </th>

              <th className="px-3 py-4">
                Subject
              </th>

              <th className="px-3 py-4">
                Availability
              </th>

              <th className="px-3 py-4">
                Location
              </th>

              <th className="px-3 py-4 text-right">
                Salary
              </th>

              <th className="px-3 py-4">
                Barrier
              </th>

              <th className="px-3 py-4">
                Updated
              </th>

              <th className="px-6 py-4">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {candidates.map((candidate) => (

              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                onOpen={() => openCandidate(candidate)}
              />

            ))}

          </tbody>

        </table>

      </div>

      <CandidateDrawer
        candidate={selectedCandidate}
        open={drawerOpen}
        onClose={closeDrawer}
      />

    </>
  );
}