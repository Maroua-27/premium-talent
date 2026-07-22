"use client";

import {
  UserPlus,
  Phone,
  CheckCircle2,
  Briefcase,
  Star,
  MessageSquare,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Candidate Registered",
    description: "Candidate completed registration and profile created.",
    date: "09 Jul 2026",
    user: "Teach East",
    icon: UserPlus,
    colour: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Registration Interview",
    description: "Interview completed successfully.",
    date: "10 Jul 2026",
    user: "Naima Ahmed",
    icon: Phone,
    colour: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    title: "References Verified",
    description: "Both references successfully verified.",
    date: "12 Jul 2026",
    user: "Luke Thompson",
    icon: CheckCircle2,
    colour: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "Added to Premium Talent",
    description: "Candidate approved for Premium Talent Programme.",
    date: "15 Jul 2026",
    user: "Luke Thompson",
    icon: Star,
    colour: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 5,
    title: "Submitted to Vacancy",
    description: "Submitted to Kings School Riyadh.",
    date: "20 Jul 2026",
    user: "Luke Thompson",
    icon: Briefcase,
    colour: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 6,
    title: "Candidate Contacted",
    description: "WhatsApp sent confirming availability.",
    date: "21 Jul 2026",
    user: "Luke Thompson",
    icon: MessageSquare,
    colour: "bg-orange-100 text-orange-700",
  },
];

export default function CandidateTimeline() {
  return (
    <div className="space-y-5">

      {timeline.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.id}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div
                className={`rounded-full p-3 ${item.colour}`}
              >
                <Icon size={20} />
              </div>

              {item.id !== timeline.length && (
                <div className="mt-2 h-16 w-px bg-gray-300" />
              )}

            </div>

            <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <span className="text-sm text-gray-500">
                  {item.date}
                </span>

              </div>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

              <p className="mt-4 text-sm font-medium text-[#00A384]">
                {item.user}
              </p>

            </div>

          </div>

        );

      })}

    </div>
  );
}