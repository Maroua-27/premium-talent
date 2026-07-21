"use client";

import {
  CheckCircle2,
  User,
  GraduationCap,
  Briefcase,
  FileCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";

export default function NominationForm() {
  return (
    <div className="grid grid-cols-12 gap-8">

      {/* LEFT */}

      <div className="col-span-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Candidate Information
        </h2>

        <div className="mt-8 space-y-6">

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Candidate
            </label>

            <select className="w-full rounded-xl border border-gray-200 p-3">
              <option>Sarah Mitchell</option>
              <option>Emma Carter</option>
              <option>Daniel Roberts</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Why should this candidate join the Premium Talent Programme?
            </label>

            <textarea
              rows={6}
              className="w-full rounded-xl border border-gray-200 p-4"
              placeholder="Explain why this candidate deserves a place in the Premium Talent Programme..."
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Consultant Notes
            </label>

            <textarea
              rows={5}
              className="w-full rounded-xl border border-gray-200 p-4"
              placeholder="Additional comments..."
            />

          </div>

          <button className="rounded-xl bg-[#00A384] px-8 py-4 font-semibold text-white transition hover:opacity-90">
            Submit Nomination
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="col-span-4 space-y-6">

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Eligibility Checklist
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Every requirement must be completed.
          </p>

          <div className="mt-6 space-y-5">

            <Checklist
              icon={<Languages size={18} />}
              text="Native English Speaker"
            />

            <Checklist
              icon={<GraduationCap size={18} />}
              text="Bachelor's Degree"
            />

            <Checklist
              icon={<ShieldCheck size={18} />}
              text="Qualified Teacher Status (QTS)"
            />

            <Checklist
              icon={<Briefcase size={18} />}
              text="2+ Years Experience"
            />

            <Checklist
              icon={<FileCheck size={18} />}
              text="References Verified"
            />

            <Checklist
              icon={<User size={18} />}
              text="Teach East Interview Passed"
            />

          </div>

        </div>

        <div className="rounded-3xl bg-[#FFF8EB] p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="text-[#F59E0B]" />

            <h3 className="font-semibold">
              Manager Approval Required
            </h3>

          </div>

          <p className="mt-3 text-sm text-gray-600">
            Once submitted, this nomination is sent to a manager for approval.
            Only approved candidates become part of the Premium Talent Programme.
          </p>

        </div>

      </div>

    </div>
  );
}

function Checklist({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="rounded-xl bg-[#E8F8F4] p-2 text-[#00A384]">
        {icon}
      </div>

      <span>{text}</span>

    </div>
  );
}