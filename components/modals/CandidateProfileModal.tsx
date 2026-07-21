"use client";

import Image from "next/image";
import {
  X,
  MapPin,
  GraduationCap,
  Briefcase,
  Wallet,
  Clock,
  Globe,
  Award,
} from "lucide-react";

import { Candidate } from "@/types/candidate";

interface Props {
  candidate: Candidate | null;
  open: boolean;
  onClose: () => void;
}

export default function CandidateProfileModal({
  candidate,
  open,
  onClose,
}: Props) {
  if (!open || !candidate) return null;

  return (
    <>
      {/* Background */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-[560px] flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Candidate Profile
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Candidate */}
          <div className="flex items-center gap-5">

            <Image
              src={candidate.avatar}
              alt={candidate.name}
              width={90}
              height={90}
              className="rounded-full object-cover"
            />

            <div>

              <h2 className="text-2xl font-bold">
                {candidate.name}
              </h2>

              <p className="text-gray-500">
                {candidate.role}
              </p>

              <div className="mt-4 flex items-center gap-3">

                <Image
                  src={candidate.nationalityFlag}
                  alt={candidate.nationality}
                  width={24}
                  height={16}
                />

                <span className="font-medium">
                  {candidate.nationality}
                </span>

              </div>

              <span className="mt-3 inline-flex rounded-full bg-[#E8F8F4] px-3 py-1 text-sm font-semibold text-[#00A384]">
                {candidate.curriculum} Curriculum
              </span>

            </div>

          </div>

          {/* Talent Score */}

          <div className="mt-8 rounded-3xl bg-[#F7F9FB] p-6">

            <p className="text-sm text-gray-500">
              Talent Score
            </p>

            <h2 className="mt-2 text-5xl font-bold text-[#00A384]">
              {candidate.profileDaysRemaining}
            </h2>

          </div>

          {/* Details */}

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">

              <Award
                size={20}
                className="text-[#00A384]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Subject
                </p>

                <p className="font-semibold">
                  {candidate.subject}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Briefcase
                size={20}
                className="text-[#00A384]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Teaching Experience
                </p>

                <p className="font-semibold">
                  {candidate.experience} Years
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Clock
                size={20}
                className="text-[#00A384]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Availability
                </p>

                <p className="font-semibold">
                  {candidate.availability}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Wallet
                size={20}
                className="text-[#00A384]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Expected Salary
                </p>

                <p className="font-semibold">
                  {candidate.expectedSalary}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <MapPin
                size={20}
                className="text-[#00A384]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Current Location
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <Image
                    src={candidate.currentLocationFlag}
                    alt={candidate.currentLocation}
                    width={24}
                    height={16}
                  />

                  <span className="font-semibold">
                    {candidate.currentLocation}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Placement Barrier */}

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">

            <h3 className="font-semibold text-red-600">
              Current Placement Barrier
            </h3>

            <p className="mt-2 text-sm text-gray-700">
              {candidate.placementBarrier}
            </p>

          </div>

          {/* Consultant Notes */}

          <div className="mt-8 rounded-2xl border border-gray-200 p-5">

            <div className="mb-3 flex items-center gap-2">

              <GraduationCap
                size={20}
                className="text-[#00A384]"
              />

              <h3 className="font-semibold">
                Consultant Notes
              </h3>

            </div>

            <p className="text-sm leading-7 text-gray-600">
              Excellent interview performance. Strong communication skills,
              highly recommended by previous school. Flexible with relocation
              and actively looking for opportunities.
            </p>

          </div>

          {/* Interested Regions */}

          <div className="mt-8 rounded-2xl border border-gray-200 p-5">

            <div className="mb-3 flex items-center gap-2">

              <Globe
                size={20}
                className="text-[#00A384]"
              />

              <h3 className="font-semibold">
                Interested Regions
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-gray-100 px-3 py-2 text-sm">
                Malaysia
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-2 text-sm">
                Singapore
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-2 text-sm">
                Vietnam
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-2 text-sm">
                Thailand
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-gray-200 p-6">

          <button className="w-full rounded-2xl bg-[#00A384] py-4 text-lg font-semibold text-white transition hover:opacity-90">
            Match to Vacancy
          </button>

        </div>

      </div>
    </>
  );
}