"use client";

import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
} from "lucide-react";

const checks = [
  {
    title: "Native English Speaker",
    passed: true,
  },
  {
    title: "Bachelor's Degree",
    passed: true,
  },
  {
    title: "Qualified Teacher Status (QTS)",
    passed: true,
  },
  {
    title: "Minimum 2 Years Experience",
    passed: true,
  },
  {
    title: "References Verified",
    passed: true,
  },
  {
    title: "Registration Interview Completed",
    passed: true,
  },
  {
    title: "Maximum Age",
    passed: true,
  },
  {
    title: "Maximum 2 Dependents",
    passed: false,
  },
];

export default function PremiumReadiness() {
  const passed = checks.filter((c) => c.passed).length;
  const total = checks.length;
  const eligible = passed === total;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={24}
            className="text-[#00A384]"
          />

          <div>

            <h2 className="text-xl font-bold">
              Premium Readiness
            </h2>

            <p className="text-sm text-gray-500">
              Automatic eligibility assessment
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-4 p-6">

        {checks.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
          >

            <span className="font-medium">
              {item.title}
            </span>

            {item.passed ? (

              <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

                <CheckCircle2 size={16} />

                Passed

              </div>

            ) : (

              <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">

                <XCircle size={16} />

                Failed

              </div>

            )}

          </div>

        ))}

      </div>

      <div className="border-t bg-gray-50 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Eligibility Score
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              {passed} / {total}
            </h3>

          </div>

          {eligible ? (

            <div className="rounded-2xl bg-green-600 px-6 py-3 text-lg font-bold text-white">
              ELIGIBLE
            </div>

          ) : (

            <div className="rounded-2xl bg-red-600 px-6 py-3 text-lg font-bold text-white">
              NOT ELIGIBLE
            </div>

          )}

        </div>

      </div>

    </div>
  );
}