import {
  CheckCircle2,
  GraduationCap,
  Languages,
  FileCheck,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const criteria = [
  {
    icon: Languages,
    title: "Native English Speaker",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
  },
  {
    icon: ShieldCheck,
    title: "Qualified Teacher Status (QTS)",
  },
  {
    icon: Briefcase,
    title: "2+ Years Teaching Experience",
  },
  {
    icon: FileCheck,
    title: "References Verified",
  },
  {
    icon: CheckCircle2,
    title: "Successful Teach East Interview",
  },
];

export default function EligibilityCriteria() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">
        Premium Eligibility
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Every requirement must be met before a consultant can nominate a candidate.
      </p>

      <div className="mt-6 space-y-4">
        {criteria.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-[#E8F8F4] p-2">
                <Icon
                  size={18}
                  className="text-[#00A384]"
                />
              </div>

              <span className="text-sm font-medium">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-[#FFF7ED] p-4">
        <p className="text-sm font-medium text-amber-700">
          Consultants cannot nominate a candidate unless every requirement has been completed.
        </p>
      </div>
    </div>
  );
}