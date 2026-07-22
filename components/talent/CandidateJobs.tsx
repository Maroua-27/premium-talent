"use client";

import {
  Building2,
  MapPin,
  Calendar,
  Briefcase,
  User,
  BadgeDollarSign,
  CheckCircle2,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    code: "TE-10452",
    school: "Kings School Riyadh",
    country: "Saudi Arabia",
    role: "Primary Teacher",
    salary: "$3,800 - $4,200",
    start: "August 2026",
    consultant: "Naima",
    status: "Shortlisting",
    matches: 14,
  },
  {
    id: 2,
    code: "TE-10384",
    school: "Brighton College Abu Dhabi",
    country: "United Arab Emirates",
    role: "Primary Teacher",
    salary: "$4,000 - $4,500",
    start: "August 2026",
    consultant: "Luke",
    status: "Interviewing",
    matches: 9,
  },
  {
    id: 3,
    code: "TE-10297",
    school: "Garden International School",
    country: "Malaysia",
    role: "Primary Teacher",
    salary: "$3,500 - $4,000",
    start: "January 2027",
    consultant: "Lubna",
    status: "Open",
    matches: 18,
  },
];

export default function CandidateJobs() {
  return (
    <div className="space-y-5">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold">{job.school}</h2>

              <p className="mt-1 text-gray-500">
                {job.role}
              </p>
            </div>

            <span className="rounded-full bg-[#00A384]/10 px-4 py-2 text-sm font-semibold text-[#00A384]">
              {job.status}
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <Info icon={<Briefcase size={18} />} label="Vacancy Code" value={job.code} />

            <Info icon={<MapPin size={18} />} label="Country" value={job.country} />

            <Info icon={<BadgeDollarSign size={18} />} label="Salary" value={job.salary} />

            <Info icon={<Calendar size={18} />} label="Start Date" value={job.start} />

            <Info icon={<User size={18} />} label="Consultant" value={job.consultant} />

            <Info icon={<Building2 size={18} />} label="School" value={job.school} />

          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-gray-50 p-4">

            <div className="flex items-center gap-2 text-[#00A384]">

              <CheckCircle2 size={18} />

              <span className="font-semibold">
                {job.matches} Premium Talent matches
              </span>

            </div>

            <button className="rounded-xl bg-[#00A384] px-5 py-3 font-semibold text-white hover:bg-[#00866d]">
              Match Candidate
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-gray-100 p-3">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400">
          {label}
        </p>

        <p className="mt-1 font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
}