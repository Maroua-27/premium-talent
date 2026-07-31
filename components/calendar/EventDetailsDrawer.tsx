"use client";

import { ReactNode } from "react";
import {
  X,
  Calendar,
  Clock3,
  User,
  GraduationCap,
  Building2,
  Briefcase,
  CheckCircle2,
  MapPin,
  FileText,
  Pencil,
  Trash2,
  ExternalLink,
} from "lucide-react";

export interface CalendarEvent {
  title: string;
  type: "Registration" | "Meeting" | "Offer" | "Reference" | "Visa";
  date?: string;
  time?: string;
  candidate?: string;
  curriculum?: string;
  stage?: string;
  school?: string;
  vacancy?: string;
  consultant?: string;
  location?: string;
  notes?: string;
}

interface EventDetailsDrawerProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

export default function EventDetailsDrawer({
  event,
  onClose,
}: EventDetailsDrawerProps) {
  if (!event) return null;

  const badgeClasses = {
    Registration: "bg-green-100 text-green-700",
    Meeting: "bg-violet-100 text-violet-700",
    Offer: "bg-orange-100 text-orange-700",
    Reference: "bg-amber-100 text-amber-700",
    Visa: "bg-cyan-100 text-cyan-700",
  };

  return (
    <div className="fixed inset-0 z-50">

      {/* Overlay */}

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* Drawer */}

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">

        {/* Header */}

        <div className="border-b border-gray-200 px-8 py-6">

          <div className="flex items-start justify-between">

            <div>

              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${badgeClasses[event.type]}`}
              >
                {event.type}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                {event.title}
              </h2>

              <p className="mt-2 text-gray-500">
                Recruitment Calendar Event
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-200 p-2 hover:bg-gray-50"
            >
              <X size={20} />
            </button>

          </div>

        </div>

        {/* Content */}

        <div className="flex-1 space-y-8 overflow-y-auto p-8">

          {/* Candidate */}

          <section>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Candidate
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00A384]/10">

                  <User
                    size={24}
                    className="text-[#00A384]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-gray-900">
                    {event.candidate ?? "Sarah Williams"}
                  </h4>

                  <p className="text-gray-500">
                    {event.vacancy ?? "Primary Teacher"}
                  </p>

                </div>

              </div>

              <div className="mt-5 grid gap-4">

                <InfoRow
                  icon={<GraduationCap size={18} />}
                  label="Curriculum"
                  value={event.curriculum ?? "British Curriculum"}
                />

                <InfoRow
                  icon={<CheckCircle2 size={18} />}
                  label="Stage"
                  value={event.stage ?? "Registration"}
                />

              </div>

            </div>

          </section>

          {/* Event Details */}

          <section>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Event Details
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5">

              <InfoRow
                icon={<Calendar size={18} />}
                label="Date"
                value={event.date ?? "Wednesday 28 October 2026"}
              />

              <InfoRow
                icon={<Clock3 size={18} />}
                label="Time"
                value={event.time ?? "10:00 AM – 10:30 AM"}
              />

              <InfoRow
                icon={<MapPin size={18} />}
                label="Location"
                value={event.location ?? "Microsoft Teams"}
              />

            </div>

          </section>

          {/* Recruitment */}

          <section>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Recruitment
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5">

              <InfoRow
                icon={<Building2 size={18} />}
                label="School"
                value={event.school ?? "Kings College Riyadh"}
              />

              <InfoRow
                icon={<Briefcase size={18} />}
                label="Vacancy"
                value={event.vacancy ?? "Primary Teacher"}
              />

              <InfoRow
                icon={<User size={18} />}
                label="Consultant"
                value={event.consultant ?? "X"}
              />

            </div>

          </section>

          {/* Notes */}

          <section>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Notes
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5">

              <div className="flex gap-3">

                <FileText
                  size={18}
                  className="mt-1 text-gray-400"
                />

                <p className="leading-7 text-gray-600">
                  {event.notes ??
                    "Candidate requested an afternoon follow-up if unavailable. Confirm availability before sending the meeting invite."}
                </p>

              </div>

            </div>

          </section>

        </div>

        {/* Footer */}

        <div className="border-t border-gray-200 bg-gray-50 p-6">

          <div className="grid gap-3">

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#00A384] py-3 font-semibold text-white hover:opacity-90">

              <Pencil size={18} />

              Edit Event

            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 font-semibold hover:bg-gray-50">

              <ExternalLink size={18} />

              Open Candidate

            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 font-semibold hover:bg-gray-50">

              <Briefcase size={18} />

              Open Vacancy

            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 py-3 font-semibold text-red-600 hover:bg-red-100">

              <Trash2 size={18} />

              Delete Event

            </button>

          </div>

        </div>

      </aside>

    </div>
  );
}

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-3 last:border-0">

      <div className="text-gray-400">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-sm text-gray-500">
          {label}
        </p>

        <p className="font-medium text-gray-900">
          {value}
        </p>

      </div>

    </div>
  );
}