"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Wallet,
  CheckCircle2,
  User,
  Briefcase,
} from "lucide-react";

import { matchCandidates } from "@/data/candidateData";

const vacancies = [
  {
    id: 1,
    code: "TE-10482",
    school: "Kings School Malaysia",
    role: "Primary Teacher",
    owner: "Naima",
    location: "Kuala Lumpur, Malaysia",
    salary: "USD 3,800",
    fit: "Strong Fit",
    status: "Open",
  },
  {
    id: 2,
    code: "TE-10501",
    school: "ABC International School",
    role: "Year 3 Teacher",
    owner: "Luke",
    location: "Singapore",
    salary: "USD 4,000",
    fit: "Strong Fit",
    status: "Open",
  },
  {
    id: 3,
    code: "TE-10465",
    school: "Doha British School",
    role: "KS2 Teacher",
    owner: "Lubna",
    location: "Doha, Qatar",
    salary: "USD 4,200",
    fit: "Good Fit",
    status: "Open",
  },
  {
    id: 4,
    code: "TE-10430",
    school: "British International School",
    role: "Primary Teacher",
    owner: "Neve",
    location: "Bangkok, Thailand",
    salary: "USD 3,900",
    fit: "Good Fit",
    status: "Open",
  },
];

const owners = [
  "All Jobs",
  "My Jobs",
  "Luke",
  "Naima",
  "Lubna",
  "Neve",
];

export default function VacancyMatch() {
  const [currentCandidate, setCurrentCandidate] = useState(0);

  const [selectedOwner, setSelectedOwner] =
    useState("All Jobs");

  const candidate = matchCandidates[currentCandidate];

  const filteredVacancies = useMemo(() => {
    if (selectedOwner === "All Jobs") {
      return vacancies;
    }

    if (selectedOwner === "My Jobs") {
      // Demo assumes current user is Luke
      return vacancies.filter(
        (job) => job.owner === "Luke"
      );
    }

    return vacancies.filter(
      (job) => job.owner === selectedOwner
    );
  }, [selectedOwner]);

  const previousCandidate = () => {
    if (currentCandidate > 0) {
      setCurrentCandidate(currentCandidate - 1);
    }
  };

  const nextCandidate = () => {
    if (currentCandidate < matchCandidates.length - 1) {
      setCurrentCandidate(currentCandidate + 1);
    }
  };

  const statusColor = () => {
    switch (candidate.profileStatus) {
      case "Verified":
        return "bg-green-100 text-green-700";

      case "Review Soon":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="space-y-8">

      {/* Navigation */}

      <div className="flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <button
          onClick={previousCandidate}
          disabled={currentCandidate === 0}
          className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />

          Previous Candidate
        </button>

        <div className="text-center">

          <h2 className="text-2xl font-bold">
            Primary Premium Pool
          </h2>

          <p className="mt-1 text-gray-500">
            Candidate {currentCandidate + 1} of{" "}
            {matchCandidates.length}
          </p>

        </div>

        <button
          onClick={nextCandidate}
          disabled={
            currentCandidate ===
            matchCandidates.length - 1
          }
          className="flex items-center gap-2 rounded-xl bg-[#00A384] px-5 py-3 font-semibold text-white transition hover:bg-[#008d73] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next Candidate

          <ChevronRight size={18} />
        </button>

      </div>
            {/* Candidate */}

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <div className="flex items-center gap-6">

          <Image
            src={candidate.avatar}
            alt={candidate.name}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />

          <div>

            <h2 className="text-3xl font-bold">
              {candidate.name}
            </h2>

            <p className="mt-1 text-lg text-gray-500">
              {candidate.role}
            </p>

            <div className="mt-4 flex items-center gap-3">

              <Image
                src={candidate.nationalityFlag}
                alt={candidate.nationality}
                width={22}
                height={15}
              />

              <span>{candidate.nationality}</span>

              <span className="text-gray-300">•</span>

              <span className="font-medium text-[#00A384]">
                {candidate.curriculum} Curriculum
              </span>

            </div>

          </div>

          <div className="ml-auto">

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor()}`}
            >
              {candidate.profileStatus}
            </span>

            <p className="mt-3 text-center text-3xl font-bold text-[#00A384]">
              {candidate.daysRemaining}
            </p>

            <p className="text-center text-sm text-gray-500">
              Days Remaining
            </p>

          </div>

        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">

          <div className="rounded-2xl bg-gray-50 p-5">

            <div className="flex items-center gap-2 text-gray-500">

              <MapPin size={18} />

              Current Location

            </div>

            <p className="mt-2 font-semibold">
              {candidate.currentLocation}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-5">

            <div className="flex items-center gap-2 text-gray-500">

              <Clock size={18} />

              Availability

            </div>

            <p className="mt-2 font-semibold">
              {candidate.availability}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-5">

            <div className="flex items-center gap-2 text-gray-500">

              <Wallet size={18} />

              Expected Salary

            </div>

            <p className="mt-2 font-semibold">
              {candidate.expectedSalary}
            </p>

          </div>

        </div>

      </div>

      {/* Available Vacancies */}

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Available Vacancies
          </h2>

          <div className="flex items-center gap-3">

            <span className="text-sm font-medium text-gray-500">
              Owner
            </span>

            <select
              value={selectedOwner}
              onChange={(e) =>
                setSelectedOwner(e.target.value)
              }
              className="rounded-xl border border-gray-300 px-4 py-2"
            >
              {owners.map((owner) => (
                <option
                  key={owner}
                  value={owner}
                >
                  {owner}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div className="space-y-5">

          {filteredVacancies.map((job) => (

            <div
              key={job.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#00A384]"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-xl font-bold">
                    {job.role}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {job.school}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    job.fit === "Strong Fit"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {job.fit}
                </span>

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <Briefcase size={16} />

                    Job Code

                  </div>

                  <p className="mt-1 font-semibold">
                    {job.code}
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <User size={16} />

                    Owner

                  </div>

                  <span className="mt-1 inline-flex rounded-full bg-[#00A384]/10 px-3 py-1 text-sm font-semibold text-[#00A384]">
                    {job.owner}
                  </span>

                </div>

                <div>

                  <div className="text-sm text-gray-500">
                    Location
                  </div>

                  <p className="mt-1 font-semibold">
                    {job.location}
                  </p>

                </div>

                <div>

                  <div className="text-sm text-gray-500">
                    Salary
                  </div>

                  <p className="mt-1 font-semibold">
                    {job.salary}
                  </p>

                </div>

              </div>

              <div className="mt-6 flex items-center justify-between border-t pt-5">

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {job.status}
                </span>

                <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-6 py-3 font-semibold text-white transition hover:bg-[#008d73]">

                  <CheckCircle2 size={18} />

                  Submit Candidate

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}