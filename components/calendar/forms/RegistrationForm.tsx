"use client";

import {
  Calendar,
  Clock3,
  Phone,
  User,
  StickyNote,
  CheckCircle2,
} from "lucide-react";

export default function RegistrationForm() {
  return (
    <div className="p-10">

      {/* Hero */}

      <div className="rounded-3xl border border-green-200 bg-green-50 p-8">

        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg">

            <Phone size={30} />

          </div>

          <div>

            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-green-700">
              Quick Action
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Registration Call
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600 leading-7">
              We&#39;ve already created the event title,
              colour and category for you.
              Simply choose a date and time and you&#39;re done.
            </p>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="mt-10 grid gap-8">

        {/* Date */}

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

        {/* Time */}

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

        {/* Candidate */}

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <User size={18} />

            Candidate

            <span className="text-sm font-normal text-gray-400">
              (optional)
            </span>

          </label>

          <input
            placeholder="Search candidate..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg focus:border-[#00A384] focus:outline-none"
          />

        </div>

        {/* Notes */}

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
            placeholder="Anything you need to remember..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

      </div>

      {/* Preview */}

      <div className="mt-10 rounded-3xl border border-green-200 bg-[#F7FFFC] p-6">

        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-green-600"
            size={22}
          />

          <h3 className="text-lg font-semibold">
            Automatically Added
          </h3>

        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase tracking-wide text-gray-400">
              Event Title
            </p>

            <p className="mt-2 font-semibold">
              Registration Call
            </p>

          </div>

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase tracking-wide text-gray-400">
              Calendar Colour
            </p>

            <div className="mt-3 flex items-center gap-2">

              <div className="h-4 w-4 rounded-full bg-green-500" />

              <span className="font-medium">
                Green
              </span>

            </div>

          </div>

          <div className="rounded-2xl bg-white p-4">

            <p className="text-xs uppercase tracking-wide text-gray-400">
              Category
            </p>

            <p className="mt-2 font-semibold">
              Registration
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-10 flex justify-end gap-4">

        <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">

          Cancel

        </button>

        <button className="rounded-2xl bg-[#00A384] px-8 py-3 font-semibold text-white shadow-lg hover:opacity-90">

          Create Registration Call

        </button>

      </div>

    </div>
  );
}