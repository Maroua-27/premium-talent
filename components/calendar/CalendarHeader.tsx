"use client";

import { useState } from "react";
import {
  CalendarDays,
  Plus,
} from "lucide-react";

import AddEventModal from "./AddEventModal";

export default function CalendarHeader() {
  const [openModal, setOpenModal] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00A384]">
            Teach East Recruitment Platform
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900">
            Calendar
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Schedule interviews, registration calls, client meetings and recruitment deadlines from one place.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">

            <CalendarDays size={18} />

            Today

          </button>

          <button className="rounded-2xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">

            Export Calendar

          </button>

          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 rounded-2xl bg-[#00A384] px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
          >

            <Plus size={18} />

            Add Event

          </button>

        </div>

      </section>

      <AddEventModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />
    </>
  );
}