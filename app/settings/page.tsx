"use client";

import {
  Save,
  ShieldCheck,
  Plus,
  Trash2,
} from "lucide-react";

const rules = [
  {
    name: "Native English Speaker",
    value: "",
    editable: false,
  },
  {
    name: "Bachelor's Degree",
    value: "",
    editable: false,
  },
  {
    name: "Qualified Teacher Status (QTS)",
    value: "",
    editable: false,
  },
  {
    name: "Minimum Teaching Experience",
    value: "2 Years",
    editable: true,
  },
  {
    name: "Maximum Age",
    value: "55",
    editable: true,
  },
  {
    name: "Maximum Dependents",
    value: "2",
    editable: true,
  },
  {
    name: "References Verified",
    value: "",
    editable: false,
  },
  {
    name: "Registration Interview Completed",
    value: "",
    editable: false,
  },
];

export default function EligibilityRulesPage() {
  return (
    <main className="mx-auto max-w-7xl">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={30}
              className="text-[#00A384]"
            />

            <h1 className="text-4xl font-bold">
              Eligibility Rules
            </h1>

          </div>

          <p className="mt-3 text-gray-500">
            Configure the eligibility criteria used to determine whether a candidate
            can be nominated into the Premium Talent Programme.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-6 py-3 font-semibold text-white hover:bg-[#00866d]">

          <Save size={18} />

          Save Changes

        </button>

      </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

        <table className="w-full">

          <thead className="border-b bg-gray-50">

            <tr>

              <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Rule
              </th>

              <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Value
              </th>

              <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Required
              </th>

              <th className="px-8 py-5 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {rules.map((rule) => (

              <tr
                key={rule.name}
                className="border-b last:border-0"
              >

                <td className="px-8 py-6 font-medium">
                  {rule.name}
                </td>

                <td className="px-8 py-6">

                  {rule.editable ? (

                    <input
                      defaultValue={rule.value}
                      className="w-40 rounded-xl border border-gray-300 px-4 py-2 focus:border-[#00A384] focus:outline-none"
                    />

                  ) : (

                    <span className="text-gray-400">
                      —
                    </span>

                  )}

                </td>

                <td className="px-8 py-6">

                  <input
                    defaultChecked
                    type="checkbox"
                    className="h-5 w-5 accent-[#00A384]"
                  />

                </td>

                <td className="px-8 py-6 text-right">

                  <button className="rounded-lg p-2 text-red-500 hover:bg-red-50">

                    <Trash2 size={18} />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="mt-10 rounded-3xl border border-dashed border-[#00A384] bg-white p-8">

        <div className="mb-8 flex items-center gap-3">

          <Plus
            size={24}
            className="text-[#00A384]"
          />

          <h2 className="text-2xl font-bold">
            Add New Eligibility Rule
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Rule Name
            </label>

            <input
              placeholder="e.g. Maximum Notice Period"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Rule Type
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none">

              <option>Yes / No</option>

              <option>Number</option>

              <option>Text</option>

              <option>Dropdown</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Default Value
            </label>

            <input
              placeholder="Optional"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
            />

          </div>

          <div className="flex items-end">

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A384] px-6 py-3 font-semibold text-white hover:bg-[#00866d]">

              <Plus size={18} />

              Add Rule

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}