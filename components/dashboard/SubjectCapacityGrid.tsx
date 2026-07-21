import SubjectCard from "./SubjectCard";

const subjects = [
  {
    subject: "Primary",
    current: 42,
    max: 50,
  },
  {
    subject: "English",
    current: 38,
    max: 50,
  },
  {
    subject: "Mathematics",
    current: 31,
    max: 50,
  },
  {
    subject: "Science",
    current: 27,
    max: 50,
  },
  {
    subject: "Leadership",
    current: 14,
    max: 50,
  },
];

export default function SubjectCapacityGrid() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-7 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Premium Talent Pool Capacity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Maximum of 50 approved candidates per subject.
          </p>

        </div>

        <span className="rounded-full bg-[#E8F8F4] px-4 py-2 text-sm font-semibold text-[#00A384]">
          152 / 250 Filled
        </span>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {subjects.map((subject) => (
          <SubjectCard
            key={subject.subject}
            {...subject}
          />
        ))}

      </div>

    </div>
  );
}