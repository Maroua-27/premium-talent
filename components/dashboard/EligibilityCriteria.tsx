import {
  CheckCircle2,
  GraduationCap,
  Languages,
  FileCheck,
  Briefcase,
  ShieldCheck,
  AlertTriangle,
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
        Every Premium Talent candidate must meet all eligibility requirements.
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

      <div className="mt-6 rounded-2xl border border-amber-200 bg-[#FFF8EB] p-5">

        <div className="flex items-start gap-3">

          <AlertTriangle
            size={20}
            className="mt-0.5 text-amber-500"
          />

          <div>

            <h3 className="font-semibold text-amber-700">
              Before Adding
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              Please ensure every eligibility requirement has been fully
              verified before adding a candidate to the Premium Talent Pool.
              Premium profiles remain active for <strong>40 days</strong>,
              after which a catch-up review is required. If no review is
              completed, the candidate is automatically returned to the
              standard Teach East database while retaining their Premium
              Talent history.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}