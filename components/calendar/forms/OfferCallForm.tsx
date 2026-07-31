"use client";

import {
  Calendar,
  Clock3,
  User,
  BadgeCheck,
  StickyNote,
  CheckCircle2,
} from "lucide-react";

export default function OfferCallForm() {
  return (
    <div className="p-10">

      {/* Hero */}

      <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">

        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
            <BadgeCheck size={30} />
          </div>

          <div>

            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-orange-700">
              Quick Action
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Offer Call
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Schedule an offer discussion with a candidate. The event type,
              colour and category are already configured.
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
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">
            <Clock3 size={18} />
            Time
          </label>

          <input
            type="time"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">
            <User size={18} />
            Candidate
          </label>

          <input
            placeholder="Search candidate..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">
            <BadgeCheck size={18} />
            Offer Status
          </label>

          <select className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none">

            <option>Verbal Offer</option>
            <option>Written Offer</option>
            <option>Final Confirmation</option>

          </select>

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">
            <StickyNote size={18} />
            Notes
          </label>

          <textarea
            rows={4}
            placeholder="Optional notes..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

      </div>

      {/* Summary */}

      <div className="mt-10 rounded-3xl border border-orange-200 bg-orange-50 p-6">

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={22}
            className="text-orange-600"
          />

          <h3 className="text-lg font-semibold">
            What the system has already done
          </h3>

        </div>

        <ul className="mt-5 space-y-3 text-gray-700">

          <li>✅ Event title created</li>
          <li>✅ Orange calendar category assigned</li>
          <li>✅ Recruitment event linked</li>

        </ul>

      </div>

      <div className="mt-10 flex justify-end gap-4">

        <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50">
          Cancel
        </button>

        <button className="rounded-2xl bg-[#00A384] px-8 py-3 font-semibold text-white hover:opacity-90">
          Schedule Offer Call
        </button>

      </div>

    </div>
  );
}