import SubjectCard from "./SubjectCard";

const subjects = [
  {
    subject: "Primary",
    count: 42,
  },
  {
    subject: "English",
    count: 38,
  },
  {
    subject: "Mathematics",
    count: 31,
  },
  {
    subject: "Science",
    count: 27,
  },
  {
    subject: "Leadership",
    count: 14,
  },
];

export default function SubjectCapacityGrid() {
  const totalCandidates = subjects.reduce(
    (total, subject) => total + subject.count,
    0
  );

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-7 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Premium Talent by Subject
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Premium candidates are grouped by subject with no limit on the
            number of qualified teachers in each category.
          </p>

        </div>

        <span className="rounded-full bg-[#E8F8F4] px-4 py-2 text-sm font-semibold text-[#00A384]">
          {totalCandidates} Premium Candidates
        </span>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {subjects.map((subject) => (
          <SubjectCard key={subject.subject} {...subject} />
        ))}

      </div>

    </div>
  );
}