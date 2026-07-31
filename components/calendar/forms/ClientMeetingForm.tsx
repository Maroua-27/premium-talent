"use client";

import {
  Calendar,
  Clock3,
  Building2,
  Link,
  StickyNote,
  CheckCircle2,
} from "lucide-react";

export default function ClientMeetingForm() {
  return (
    <div className="p-10">

      {/* Hero */}

      <div className="rounded-3xl border border-violet-200 bg-violet-50 p-8">

        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500 text-white shadow-lg">

            <Building2 size={30} />

          </div>

          <div>

            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-violet-700">
              Quick Action
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Client Meeting
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Everything related to the calendar event is already configured.
              Just choose when the meeting will happen.
            </p>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="mt-10 grid gap-8">

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <Calendar size={18} />

            Date

          </label>

          <input
            type="date"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <Clock3 size={18} />

            Time

          </label>

          <input
            type="time"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <Building2 size={18} />

            Client

            <span className="text-sm font-normal text-gray-400">
              (optional)
            </span>

          </label>

          <input
            placeholder="Kings College..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <Link size={18} />

            Meeting Link

            <span className="text-sm font-normal text-gray-400">
              (optional)
            </span>

          </label>

          <input
            placeholder="https://teams.microsoft.com/..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <StickyNote size={18} />

            Notes

            <span className="text-sm font-normal text-gray-400">
              (optional)
            </span>

          </label>

          <textarea
            rows={4}
            placeholder="Meeting agenda..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

      </div>

      {/* Automatic */}

      <div className="mt-10 rounded-3xl border border-violet-200 bg-violet-50 p-6">

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={22}
            className="text-violet-600"
          />

          <h3 className="text-lg font-semibold">
            Automatically Added
          </h3>

        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase text-gray-400">
              Event Title
            </p>

            <p className="mt-2 font-semibold">
              Client Meeting
            </p>

          </div>

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase text-gray-400">
              Calendar Colour
            </p>

            <div className="mt-3 flex items-center gap-2">

              <div className="h-4 w-4 rounded-full bg-violet-500" />

              <span>Violet</span>

            </div>

          </div>

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase text-gray-400">
              Category
            </p>

            <p className="mt-2 font-semibold">
              Client Meeting
            </p>

          </div>

        </div>

      </div>

      <div className="mt-10 flex justify-end gap-4">

        <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium">

          Cancel

        </button>

        <button className="rounded-2xl bg-[#00A384] px-8 py-3 font-semibold text-white">

          Schedule Meeting

        </button>

      </div>

    </div>
  );
}