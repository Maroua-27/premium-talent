"use client";

import { useState } from "react";
import {
  Phone,
  Users,
  Handshake,
  FileCheck,
  Plane,
  GraduationCap,
  Building2,
} from "lucide-react";

import EventDetailsDrawer, {
  CalendarEvent,
} from "./EventDetailsDrawer";

const days = [
  {
    label: "Mon",
    date: "26",
  },
  {
    label: "Tue",
    date: "27",
  },
  {
    label: "Wed",
    date: "28",
    active: true,
  },
  {
    label: "Thu",
    date: "29",
  },
  {
    label: "Fri",
    date: "30",
  },
  {
    label: "Sat",
    date: "31",
  },
  {
    label: "Sun",
    date: "1",
  },
];

const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

type CalendarGridEvent = CalendarEvent & {
  day: number;
  row: number;
  subtitle: string;
  color: string;
  badge: string;
};

const events: CalendarGridEvent[] = [
  {
    day: 0,
    row: 1,
    title: "Registration Call",
    subtitle: "Emma Carter",
    type: "Registration",
    color: "border-l-[#22C55E] bg-white",
    badge: "bg-green-100 text-green-700",
    candidate: "Emma Carter",
    curriculum: "British Curriculum",
    stage: "Registration",
    school: "Kings College Riyadh",
    vacancy: "Primary Teacher",
    consultant: "Name",
    date: "Monday 26 October 2026",
    time: "09:00",
    location: "Microsoft Teams",
    notes: "Initial registration call.",
  },

  {
    day: 1,
    row: 2,
    title: "Client Meeting",
    subtitle: "Kings College",
    type: "Meeting",
    color: "border-l-[#8B5CF6] bg-white",
    badge: "bg-violet-100 text-violet-700",
    candidate: "N/A",
    curriculum: "British Curriculum",
    stage: "Client Meeting",
    school: "Kings College",
    vacancy: "Recruitment Planning",
    consultant: "Name",
    date: "Tuesday 27 October 2026",
    time: "10:30",
    location: "Zoom",
    notes: "Discuss hiring needs.",
  },

  {
    day: 2,
    row: 1,
    title: "Registration Call",
    subtitle: "Sarah Mitchell",
    type: "Registration",
    color: "border-l-[#22C55E] bg-white",
    badge: "bg-green-100 text-green-700",
    candidate: "Sarah Mitchell",
    curriculum: "British Curriculum",
    stage: "Registration",
    school: "Kings College Riyadh",
    vacancy: "Primary Teacher",
    consultant: "Name",
    date: "Wednesday 28 October 2026",
    time: "09:00",
    location: "Microsoft Teams",
    notes: "Candidate requested afternoon follow-up.",
  },
    {
    day: 2,
    row: 5,
    title: "Candidate Interview",
    subtitle: "Ava Martinez",
    type: "Meeting",
    color: "border-l-[#2563EB] bg-white",
    badge: "bg-blue-100 text-blue-700",
    candidate: "Ava Martinez",
    curriculum: "IB Curriculum",
    stage: "Interview",
    school: "Dubai International School",
    vacancy: "Science Teacher",
    consultant: "Name",
    date: "Wednesday 28 October 2026",
    time: "13:00",
    location: "Microsoft Teams",
    notes: "Panel interview.",
  },

  {
    day: 3,
    row: 2,
    title: "Candidate Interview",
    subtitle: "Liam Taylor",
    type: "Meeting",
    color: "border-l-[#2563EB] bg-white",
    badge: "bg-blue-100 text-blue-700",
    candidate: "Liam Taylor",
    curriculum: "British Curriculum",
    stage: "Interview",
    school: "Repton School",
    vacancy: "Maths Teacher",
    consultant: "Name",
    date: "Thursday 29 October 2026",
    time: "10:00",
    location: "Google Meet",
    notes: "Second-stage interview.",
  },

  {
    day: 4,
    row: 1,
    title: "Reference Check",
    subtitle: "Isabella White",
    type: "Reference",
    color: "border-l-[#F59E0B] bg-white",
    badge: "bg-amber-100 text-amber-700",
    candidate: "Isabella White",
    curriculum: "British Curriculum",
    stage: "Reference Check",
    school: "Nord Anglia",
    vacancy: "English Teacher",
    consultant: "Name",
    date: "Friday 30 October 2026",
    time: "09:30",
    location: "Phone Call",
    notes: "Contact previous Headteacher.",
  },

  {
    day: 4,
    row: 6,
    title: "Offer Call",
    subtitle: "Mia Clark",
    type: "Offer",
    color: "border-l-[#FB923C] bg-white",
    badge: "bg-orange-100 text-orange-700",
    candidate: "Mia Clark",
    curriculum: "American Curriculum",
    stage: "Offer",
    school: "GEMS Wellington",
    vacancy: "Primary Teacher",
    consultant: "Name",
    date: "Friday 30 October 2026",
    time: "16:00",
    location: "Phone Call",
    notes: "Verbal offer discussion.",
  },
];

function getEventIcon(type: string) {
  switch (type) {
    case "Registration":
      return <Phone className="h-3.5 w-3.5 text-green-600" />;

    case "Meeting":
      return <Users className="h-3.5 w-3.5 text-blue-600" />;

    case "Offer":
      return <Phone className="h-3.5 w-3.5 text-orange-600" />;

    case "Reference":
      return <FileCheck className="h-3.5 w-3.5 text-amber-600" />;

    default:
      return <Phone className="h-3.5 w-3.5 text-gray-500" />;
  }
}

export default function CalendarGrid() {
  const [selectedEvent, setSelectedEvent] =
    useState<CalendarEvent | null>(null);

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}

        <div className="grid grid-cols-[90px_repeat(7,1fr)] border-b border-gray-200 bg-white">

          <div />

          {days.map((day) => (

            <div
              key={day.date}
              className="border-l border-gray-100 py-5 text-center"
            >

              <p className="text-sm text-gray-500">
                {day.label}
              </p>

              <div
                className={`mx-auto mt-2 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
                  day.active
                    ? "bg-[#00A384] text-white"
                    : "text-gray-900"
                }`}
              >
                {day.date}
              </div>

            </div>

          ))}

        </div>

        {/* Grid */}

        <div className="relative">
          {times.map((time, row) => (

  <div
    key={time}
    className="grid grid-cols-[90px_repeat(7,1fr)]"
  >

    <div className="border-b border-gray-100 py-8 pr-4 text-right text-sm text-gray-400">
      {time}
    </div>

    {days.map((_, col) => (

      <div
        key={col}
        className="relative h-22 border-b border-l border-gray-100"
      >

        {events
          .filter(
            (event) =>
              event.day === col &&
              event.row === row
          )
          .map((event, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setSelectedEvent(event)}
              className={`absolute inset-2 rounded-xl border-l-4 p-3 text-left shadow-sm transition hover:shadow-md ${event.color}`}
            >

              <div
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium ${event.badge}`}
              >
                {getEventIcon(event.type)}
                <span>{event.type}</span>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                {event.subtitle}
              </p>

            </button>

          ))}

      </div>

    ))}

  </div>

))}
        </div>
               

      </section>

      <EventDetailsDrawer
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}