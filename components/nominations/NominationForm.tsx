"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Briefcase,
  FileCheck,
  GraduationCap,
  Languages,
  ShieldCheck,
  User,
} from "lucide-react";

const checklistItems = [
  {
    icon: <Languages size={18} />,
    text: "Native English Speaker",
  },
  {
    icon: <GraduationCap size={18} />,
    text: "Bachelor's Degree",
  },
  {
    icon: <ShieldCheck size={18} />,
    text: "Qualified Teacher Status (QTS)",
  },
  {
    icon: <Briefcase size={18} />,
    text: "2+ Years International School Experience",
  },
  {
    icon: <FileCheck size={18} />,
    text: "References Verified",
  },
  {
    icon: <User size={18} />,
    text: "Teach East Registration Interview Completed",
  },
];

export default function NominationForm() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(checklistItems.length).fill(false)
  );

  const allChecked = checked.every(Boolean);

  const toggleItem = (index: number) => {
    setChecked((current) =>
      current.map((value, i) => (i === index ? !value : value))
    );
  };

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
              Recruiter Notes
            </label>

            <textarea
              rows={8}
              className="w-full rounded-xl border border-gray-200 p-4"
              placeholder="Interview summary, strengths, preferred countries, salary expectations, barriers, or any other important information..."
            />

          </div>

          <button
            disabled={!allChecked}
            className={`rounded-xl px-8 py-4 font-semibold text-white transition ${
              allChecked
                ? "bg-[#00A384] hover:opacity-90"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            Add to Premium Talent
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
            Every requirement must be verified before adding the candidate.
          </p>

          <div className="mt-6 space-y-4">

            {checklistItems.map((item, index) => (

              <label
                key={item.text}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-100 p-3 transition hover:bg-gray-50"
              >

                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggleItem(index)}
                  className="h-5 w-5 accent-[#00A384]"
                />

                <div className="rounded-xl bg-[#E8F8F4] p-2 text-[#00A384]">
                  {item.icon}
                </div>

                <span className="text-sm font-medium">
                  {item.text}
                </span>

              </label>

            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-amber-300 bg-[#FFF8EB] p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle className="text-amber-500" />

            <h3 className="font-semibold">
              Before Adding
            </h3>

          </div>

          <p className="mt-3 text-sm leading-6 text-gray-700">
            Please ensure every eligibility requirement has been fully
            verified. Premium Talent candidates are added immediately and
            remain active for a 40-day review cycle before a follow-up is
            required.
          </p>

        </div>

      </div>

    </div>
  );
}