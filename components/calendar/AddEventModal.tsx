"use client";

import { useState } from "react";
import { X } from "lucide-react";

import EventTypePicker from "./EventTypePicker";

import RegistrationForm from "./forms/RegistrationForm";
import ClientMeetingForm from "./forms/ClientMeetingForm";
import OfferCallForm from "./forms/OfferCallForm";
import ReferenceCheckForm from "./forms/ReferenceCheckForm";
import VisaAppointmentForm from "./forms/VisaAppointmentForm";
import GenericEventForm from "./forms/GenericEventForm";

interface AddEventModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddEventModal({
  open,
  onClose,
}: AddEventModalProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  if (!open) return null;

  function closeModal() {
    setSelectedType(null);
    onClose();
  }

  function renderContent() {
    switch (selectedType) {
      case null:
        return (
          <EventTypePicker
            onSelect={setSelectedType}
          />
        );

      case "Registration Call":
        return (
          <>
            <Header
              title="Registration Call"
              onBack={() => setSelectedType(null)}
            />
            <RegistrationForm />
          </>
        );

      case "Client Meeting":
        return (
          <>
            <Header
              title="Client Meeting"
              onBack={() => setSelectedType(null)}
            />
            <ClientMeetingForm />
          </>
        );

      case "Offer Call":
        return (
          <>
            <Header
              title="Offer Call"
              onBack={() => setSelectedType(null)}
            />
            <OfferCallForm />
          </>
        );

      case "Reference Check":
        return (
          <>
            <Header
              title="Reference Check"
              onBack={() => setSelectedType(null)}
            />
            <ReferenceCheckForm />
          </>
        );

      case "Visa Appointment":
        return (
          <>
            <Header
              title="Visa Appointment"
              onBack={() => setSelectedType(null)}
            />
            <VisaAppointmentForm />
          </>
        );

      case "Candidate Interview":
        return (
          <>
            <Header
              title="Candidate Interview"
              onBack={() => setSelectedType(null)}
            />

            <div className="p-10">

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">

                <h3 className="text-2xl font-bold text-blue-900">
                  Interviews are managed from the recruitment workflow.
                </h3>

                <p className="mt-4 leading-7 text-blue-700">
                  Candidate interviews are automatically linked to
                  candidates, vacancies and hiring stages. Schedule
                  interviews directly from the recruitment pipeline to
                  keep everything in sync.
                </p>

                <button className="mt-8 rounded-2xl bg-[#00A384] px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  Open Candidate Pipeline
                </button>

              </div>

            </div>
          </>
        );

      case "Other Event":
        return (
          <>
            <Header
              title="Custom Event"
              onBack={() => setSelectedType(null)}
            />
            <GenericEventForm />
          </>
        );

      default:
        return null;
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">

      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

        <button
          onClick={closeModal}
          className="absolute right-6 top-6 z-50 rounded-xl border border-gray-200 bg-white p-2 transition hover:bg-gray-50"
        >
          <X size={18} />
        </button>

        {renderContent()}

      </div>

    </div>
  );
}

interface HeaderProps {
  title: string;
  onBack: () => void;
}

function Header({
  title,
  onBack,
}: HeaderProps) {
  return (
    <div className="border-b border-gray-200 px-10 py-6">

      <button
        onClick={onBack}
        className="mb-4 text-sm font-semibold text-[#00A384] transition hover:opacity-80"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold text-gray-900">
        {title}
      </h2>

    </div>
  );
}