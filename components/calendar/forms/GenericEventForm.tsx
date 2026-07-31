"use client";

import {
  Calendar,
  Clock3,
  FileText,
  MapPin,
  Users,
  Type,
} from "lucide-react";

export default function GenericEventForm() {
  return (
    <div className="p-10">

      <div className="mb-8">

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
          Custom Event
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Create Custom Event
        </h2>

        <p className="mt-2 text-gray-500">
          Use the full calendar form when your event doesn&#39;t match one of the recruitment templates.
        </p>

      </div>

      <div className="grid gap-6">

        {/* Title */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

            <Type size={17} />

            Title

          </label>

          <input
            placeholder="Event title"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        {/* Description */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

            <FileText size={17} />

            Description

          </label>

          <textarea
            rows={4}
            placeholder="Optional description..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        {/* Date */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

            <Calendar size={17} />

            Event Date

          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        {/* Time */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

              <Clock3 size={17} />

              Start Time

            </label>

            <input
              type="time"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

              <Clock3 size={17} />

              End Time

            </label>

            <input
              type="time"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

            <MapPin size={17} />

            Location

          </label>

          <input
            placeholder="Optional location"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
          />

        </div>

        {/* Share */}

        <div>

          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

            <Users size={17} />

            Share With

          </label>

          <input
            placeholder="Search users..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00A384] focus:outline-none"
          />

        </div>

      </div>

      <button className="mt-8 w-full rounded-2xl bg-[#00A384] py-4 text-lg font-semibold text-white transition hover:opacity-90">

        Create Event

      </button>

    </div>
  );
}