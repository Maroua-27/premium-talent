"use client";

import {
  Calendar,
  Clock3,
  User,
  Building2,
  MapPin,
  CheckCircle2,
  Plane,
} from "lucide-react";

export default function VisaAppointmentForm() {
  return (
    <div className="p-10">

      {/* Hero */}

      <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8">

        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg">

            <Plane size={30} />

          </div>

          <div>

            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-cyan-700">
              Quick Action
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Visa Appointment
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Schedule an embassy or visa appointment without completing
              unnecessary calendar fields.
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

            <Building2 size={18} />

            Embassy / Visa Centre

          </label>

          <input
            placeholder="British Embassy Abu Dhabi..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

            <MapPin size={18} />

            Location

          </label>

          <input
            placeholder="Abu Dhabi"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:border-[#00A384] focus:outline-none"
          />

        </div>

      </div>

      {/* Summary */}

      <div className="mt-10 rounded-3xl border border-cyan-200 bg-cyan-50 p-6">

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={22}
            className="text-cyan-600"
          />

          <h3 className="text-lg font-semibold">
            What the system has already done
          </h3>

        </div>

        <ul className="mt-5 space-y-3 text-gray-700">

          <li>✅ Event title created</li>
          <li>✅ Cyan calendar category assigned</li>
          <li>✅ Recruitment event linked</li>

        </ul>

      </div>

      <div className="mt-10 flex justify-end gap-4">

        <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50">

          Cancel

        </button>

        <button className="rounded-2xl bg-[#00A384] px-8 py-3 font-semibold text-white hover:opacity-90">

          Schedule Appointment

        </button>

      </div>

    </div>
  );
}