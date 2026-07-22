"use client";

import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const documents = [
  {
    name: "Curriculum Vitae",
    status: "Verified",
    updated: "2 days ago",
  },
  {
    name: "Passport",
    status: "Verified",
    updated: "1 month ago",
  },
  {
    name: "Bachelor's Degree",
    status: "Verified",
    updated: "3 months ago",
  },
  {
    name: "Qualified Teacher Status (QTS)",
    status: "Verified",
    updated: "3 months ago",
  },
  {
    name: "Police Clearance",
    status: "Expiring Soon",
    updated: "11 months ago",
  },
  {
    name: "Reference Letters",
    status: "Verified",
    updated: "1 week ago",
  },
];

export default function CandidateDocuments() {
  return (
    <div className="space-y-4">

      {documents.map((document) => (

        <div
          key={document.name}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-[#00A384]/10 p-3">

                <FileText
                  size={22}
                  className="text-[#00A384]"
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  {document.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Updated {document.updated}
                </p>

              </div>

            </div>

            <div>

              {document.status === "Verified" ? (

                <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">

                  <CheckCircle2 size={16} />

                  Verified

                </span>

              ) : (

                <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-2 text-sm font-semibold text-yellow-700">

                  <AlertCircle size={16} />

                  Expiring Soon

                </span>

              )}

            </div>

          </div>

          <div className="mt-5 flex gap-3">

            <button className="flex items-center gap-2 rounded-xl border px-5 py-2 font-medium hover:bg-gray-50">

              <Eye size={17} />

              Preview

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-[#00A384] px-5 py-2 font-semibold text-white hover:bg-[#00866d]">

              <Download size={17} />

              Download

            </button>

          </div>

        </div>

      ))}

    </div>
  );
}