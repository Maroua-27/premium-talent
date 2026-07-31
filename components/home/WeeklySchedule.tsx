const schedule = [
  {
    day: "Monday",
    events: [
      {
        time: "09:00",
        title: "Registration Call",
        type: "Registration",
        color: "bg-sky-500",
      },
      {
        time: "14:00",
        title: "Candidate Interview",
        type: "Interview",
        color: "bg-[#00A384]",
      },
    ],
  },
  {
    day: "Tuesday",
    events: [
      {
        time: "10:00",
        title: "Client Meeting",
        type: "Meeting",
        color: "bg-violet-500",
      },
    ],
  },
  {
    day: "Wednesday",
    events: [
      {
        time: "11:00",
        title: "Registration Call",
        type: "Registration",
        color: "bg-sky-500",
      },
      {
        time: "16:00",
        title: "Shortlist Deadline",
        type: "Deadline",
        color: "bg-red-500",
      },
    ],
  },
  {
    day: "Thursday",
    events: [
      {
        time: "13:30",
        title: "Candidate Interview",
        type: "Interview",
        color: "bg-[#00A384]",
      },
    ],
  },
  {
    day: "Friday",
    events: [
      {
        time: "09:30",
        title: "Internal Meeting",
        type: "Meeting",
        color: "bg-violet-500",
      },
    ],
  },
];

export default function WeeklySchedule() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div>

        <h2 className="text-2xl font-bold text-gray-900">
          This Week
        </h2>

        <p className="mt-2 text-gray-500">
          Interviews, registration calls, meetings and important deadlines.
        </p>

      </div>

      <div className="mt-8 space-y-6">

        {schedule.map((day) => (

          <div key={day.day}>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              {day.day}
            </h3>

            <div className="space-y-3">

              {day.events.map((event, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-[#00A384]"
                >

                  <div className={`h-10 w-2 rounded-full ${event.color}`} />

                  <div className="min-w-[70px] text-sm font-semibold text-gray-500">
                    {event.time}
                  </div>

                  <div className="flex-1">

                    <h4 className="font-semibold text-gray-900">
                      {event.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {event.type}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}