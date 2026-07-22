"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  ClipboardCheck,
  User,
} from "lucide-react";

const communication = [
  {
    id: 1,
    type: "WhatsApp",
    icon: MessageCircle,
    colour: "bg-green-100 text-green-700",
    date: "21 Jul 2026",
    consultant: "Luke Thompson",
    note: "Candidate confirmed immediate availability and remains interested in UAE and Qatar.",
  },
  {
    id: 2,
    type: "Email",
    icon: Mail,
    colour: "bg-blue-100 text-blue-700",
    date: "18 Jul 2026",
    consultant: "Naima Ahmed",
    note: "Requested updated CV and confirmed expected salary.",
  },
  {
    id: 3,
    type: "Phone Call",
    icon: Phone,
    colour: "bg-orange-100 text-orange-700",
    date: "14 Jul 2026",
    consultant: "Luke Thompson",
    note: "Discussed preferred locations. Candidate declined China but remains open to the Middle East.",
  },
  {
    id: 4,
    type: "Registration",
    icon: ClipboardCheck,
    colour: "bg-[#00A384]/10 text-[#00A384]",
    date: "09 Jul 2026",
    consultant: "Teach East",
    note: "Registration interview successfully completed. References verified.",
  },
];

export default function CandidateCommunication() {
  return (
    <div className="space-y-5">

      {communication.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >

            <div className="flex items-start gap-5">

              <div
                className={`rounded-xl p-3 ${item.colour}`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-bold">
                      {item.type}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>

                  </div>

                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

                  <User size={16} />

                  {item.consultant}

                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.note}
                </p>

              </div>

            </div>

          </div>

        );
      })}

    </div>
  );
}