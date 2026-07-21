const subjects = [
  {
    name: "Primary",
    current: 42,
    max: 50,
  },
  {
    name: "English",
    current: 38,
    max: 50,
  },
  {
    name: "Mathematics",
    current: 31,
    max: 50,
  },
  {
    name: "Science",
    current: 27,
    max: 50,
  },
  {
    name: "Leadership",
    current: 14,
    max: 50,
  },
];

export default function SubjectCapacityGrid() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-bold">
          Premium Pool Capacity
        </h2>

        <span className="rounded-full bg-[#00A384] px-3 py-1 text-xs font-semibold text-white">
          152 / 250
        </span>

      </div>

      <div className="mt-6 space-y-5">

        {subjects.map((subject) => {

          const width =
            (subject.current / subject.max) * 100;

          return (
            <div key={subject.name}>

              <div className="mb-2 flex justify-between text-sm">

                <span>{subject.name}</span>

                <span className="font-semibold">
                  {subject.current}/{subject.max}
                </span>

              </div>

              <div className="h-2 rounded-full bg-gray-200">

                <div
                  className="h-2 rounded-full bg-[#00A384]"
                  style={{
                    width: `${width}%`,
                  }}
                />

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}