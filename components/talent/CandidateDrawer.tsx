"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  History,
  Briefcase,
  Download,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

import { Candidate } from "@/types/candidate";

interface Props {
  candidate: Candidate | null;
  open: boolean;
  onClose: () => void;
}

const tabs = [
  "Overview",
  "CV Summary",
  "Registration",
  "History",
  "Jobs",
];

export default function CandidateDrawer({
  candidate,
  open,
  onClose,
}: Props) {
  const [activeTab, setActiveTab] =
    useState("Overview");

  if (!candidate) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 transition ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[560px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="border-b p-7">

          <div className="flex items-start justify-between">

            <div className="flex gap-4">

              <Image
                src={candidate.avatar}
                alt={candidate.name}
                width={74}
                height={74}
                className="rounded-full"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {candidate.name}
                </h2>

                <p className="text-gray-500">
                  {candidate.role}
                </p>

                <div className="mt-3 inline-flex rounded-full bg-[#00A384]/10 px-4 py-1 text-sm font-semibold text-[#00A384]">

                  Premium Talent

                </div>

              </div>

            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

          </div>

        </div>

        {/* Tabs */}

        <div className="border-b">

          <div className="flex">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`flex-1 border-b-2 py-4 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "border-[#00A384] text-[#00A384]"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>

        </div>

        {/* Scroll Area */}

        <div className="flex-1 overflow-y-auto p-7">

          {activeTab === "Overview" && (
            <Overview candidate={candidate} />
          )}

          {activeTab === "CV Summary" && (
            <CVSummary />
          )}

          {activeTab === "Registration" && (
            <Registration />
          )}

          {activeTab === "History" && (
            <HistoryTab />
          )}

          {activeTab === "Jobs" && (
            <Jobs />
          )}

        </div>

        {/* Footer */}

        <div className="grid grid-cols-2 gap-3 border-t p-6">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#00A384] py-3 font-semibold text-white">

            <Briefcase size={18} />

            Match

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border py-3 font-semibold">

            <MessageSquare size={18} />

            Message

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border py-3 font-semibold">

            <Download size={18} />

            Download CV

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border py-3 font-semibold">

            <History size={18} />

            Activity

          </button>

        </div>

      </aside>
    </>
  );
}

function Overview({
  candidate,
}: {
  candidate: Candidate;
}) {
  return (
    <div className="space-y-8">

      <section>

        <h3 className="mb-4 text-lg font-bold">
          Profile
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <Card
            label="Nationality"
            value={candidate.nationality}
          />

          <Card
            label="Current Location"
            value={candidate.currentLocation}
          />

          <Card
            label="Curriculum"
            value={candidate.curriculum}
          />

          <Card
            label="Experience"
            value={`${candidate.experience} Years`}
          />

          <Card
            label="Availability"
            value={candidate.availability}
          />

          <Card
            label="Expected Salary"
            value={candidate.expectedSalary}
          />

        </div>

      </section>

      <section>

        <h3 className="mb-4 text-lg font-bold">
          Eligibility
        </h3>

        <div className="space-y-3">

          {[
            "Native English Speaker",
            "Bachelor's Degree",
            "QTS",
            "References Verified",
            "Registration Interview",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-green-50 p-3"
            >
              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              {item}
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

function CVSummary() {
  return (
    <div className="space-y-6">

      <h3 className="text-xl font-bold">
        CV Summary
      </h3>

      <p className="leading-8 text-gray-600">
        Experienced international teacher with a strong
        background in British curriculum schools.
        Demonstrated success improving student outcomes,
        mentoring colleagues and contributing to whole-school
        initiatives.
      </p>

    </div>
  );
}

function Registration() {
  return (
    <div className="space-y-5">

      <h3 className="text-xl font-bold">
        Registration Notes
      </h3>

      <div className="rounded-2xl bg-gray-50 p-5">
        Candidate is open to Middle East opportunities,
        prefers Primary roles and is available immediately.
      </div>

    </div>
  );
}

function HistoryTab() {
  return (
    <div className="space-y-5">

      <h3 className="text-xl font-bold">
        Activity Timeline
      </h3>

      {[
        "Registration completed",
        "References verified",
        "CV uploaded",
        "Premium nomination submitted",
      ].map((item) => (
        <div
          key={item}
          className="rounded-xl border p-4"
        >
          {item}
        </div>
      ))}

    </div>
  );
}

function Jobs() {
  return (
    <div className="space-y-4">

      <h3 className="text-xl font-bold">
        Recommended Vacancies
      </h3>

      {[
        "Kings School Riyadh",
        "Brighton College Abu Dhabi",
        "Garden International School",
      ].map((job) => (
        <div
          key={job}
          className="flex items-center justify-between rounded-xl border p-4"
        >
          <div>

            <p className="font-semibold">
              {job}
            </p>

            <p className="text-sm text-gray-500">
              96% Match
            </p>

          </div>

          <button className="rounded-lg bg-[#00A384] px-4 py-2 text-sm font-semibold text-white">
            Match
          </button>

        </div>
      ))}

    </div>
  );
}

function Card({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border p-4">

      <p className="text-xs uppercase text-gray-400">
        {label}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>

    </div>
  );
}