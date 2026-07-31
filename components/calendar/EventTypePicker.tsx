"use client";

import {
  ArrowRight,
  CalendarPlus,
  Gift,
  Handshake,
  Phone,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

interface EventTypePickerProps {
  onSelect: (type: string) => void;
}

const quickActions = [
  {
    title: "Registration Call",
    description:
      "Create a registration call in seconds.",
    type: "Registration Call",
    icon: Phone,
    accent: "bg-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
  },
  {
    title: "Candidate Interview",
    description:
      "Managed from the recruitment workflow.",
    type: "Candidate Interview",
    icon: Users,
    accent: "bg-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  {
    title: "Client Meeting",
    description:
      "Schedule meetings with schools and clients.",
    type: "Client Meeting",
    icon: Handshake,
    accent: "bg-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-700",
  },
  {
    title: "Offer Call",
    description:
      "Track verbal offers and follow-up calls.",
    type: "Offer Call",
    icon: Gift,
    accent: "bg-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
  },
  {
    title: "Reference Check",
    description:
      "Book reference and safeguarding checks.",
    type: "Reference Check",
    icon: ShieldCheck,
    accent: "bg-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
  },
  {
    title: "Visa Appointment",
    description:
      "Schedule embassy and visa appointments.",
    type: "Visa Appointment",
    icon: Plane,
    accent: "bg-cyan-500",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-700",
  },
];

export default function EventTypePicker({
  onSelect,
}: EventTypePickerProps) {
  return (
    <div className="p-10">

      <div className="text-center">

        <span className="rounded-full bg-[#E8F8F4] px-4 py-1 text-sm font-semibold text-[#00A384]">
          Quick Actions
        </span>

        <h1 className="mt-5 text-4xl font-bold text-gray-900">
          What would you like to schedule?
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
          Choose a recruitment template to skip
          unnecessary fields and create events
          faster.
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {quickActions.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() =>
                onSelect(item.type)
              }
              className={`group relative overflow-hidden rounded-3xl border ${item.border} ${item.bg} p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >

              <div
                className={`absolute left-0 top-0 h-full w-2 ${item.accent}`}
              />

              <div className="flex items-start justify-between">

                <div
                  className={`rounded-2xl ${item.bg} p-3 ${item.text}`}
                >
                  <Icon size={26} />
                </div>

                <ArrowRight
                  size={20}
                  className="translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-gray-500">
                {item.description}
              </p>

            </button>
          );

        })}

      </div>

      <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-6">

        <button
          onClick={() =>
            onSelect("Other Event")
          }
          className="flex w-full items-center justify-between"
        >

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-white p-3 shadow-sm">

              <CalendarPlus size={24} />

            </div>

            <div className="text-left">

              <h3 className="text-lg font-semibold text-gray-900">
                Custom Event
              </h3>

              <p className="text-gray-500">
                Use the traditional calendar form
                for events that don&#39;t match a
                recruitment template.
              </p>

            </div>

          </div>

          <ArrowRight size={22} />

        </button>

      </div>

    </div>
  );
}