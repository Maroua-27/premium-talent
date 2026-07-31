"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const tabs = [
  {
    name: "Applications",
    count: 18,
    color: "bg-[#00A384]",
  },
  {
    name: "Offers",
    count: 2,
    color: "bg-violet-500",
  },
  {
    name: "References",
    count: 5,
    color: "bg-sky-500",
  },
  {
    name: "Interviews",
    count: 9,
    color: "bg-amber-500",
  },
];

const data = {
  Applications: [
    {
      vacancy: "History Teacher",
  client: "Aldar Academies",
  id: "TE-4732",
  updated: "5 hrs ago",
  status: "4 New Applications",
},
{
  vacancy: "Chemistry Teacher",
  client: "Repton School",
  id: "TE-4726",
  updated: "6 hrs ago",
  status: "3 New Applications",
},
{
  vacancy: "Biology Teacher",
  client: "Harrow Bangkok",
  id: "TE-4718",
  updated: "7 hrs ago",
  status: "2 New Applications",
},
{
  vacancy: "Physics Teacher",
  client: "Brighton College",
  id: "TE-4709",
  updated: "Yesterday",
  status: "5 New Applications",
},
{
  vacancy: "ICT Teacher",
  client: "Dubai British School",
  id: "TE-4697",
  updated: "Yesterday",
  status: "4 New Applications",
},
{
  vacancy: "Early Years Teacher",
  client: "Nord Anglia",
  id: "TE-4689",
  updated: "Yesterday",
  status: "6 New Applications",
},
{
  vacancy: "Art Teacher",
  client: "International School Riyadh",
  id: "TE-4681",
  updated: "Yesterday",
  status: "2 New Applications",
},
{
  vacancy: "Music Teacher",
  client: "GEMS Wellington",
  id: "TE-4674",
  updated: "Yesterday",
  status: "1 New Application",
    },
  ],

  Offers: [
    {
      vacancy: "Primary Teacher",
      client: "GEMS Education",
      id: "Emma Carter",
      updated: "Today",
      status: "Offer Accepted",
    },
    {
      vacancy: "Mathematics Teacher",
      client: "Kings College",
      id: "James Wilson",
      updated: "Today",
      status: "Offer Pending",
    },
  ],

  References: [
    {
      vacancy: "Sarah Mitchell",
      client: "Primary Teacher",
      id: "Dubai",
      updated: "Today",
      status: "References Received",
    },
    {
      vacancy: "Ahmed Hassan",
      client: "Science Teacher",
      id: "Vietnam",
      updated: "Yesterday",
      status: "1 Reference Outstanding",
    },
  ],

  Interviews: [
    {
      vacancy: "Emma Carter",
      client: "Primary Teacher",
      id: "Tomorrow",
      updated: "09:00",
      status: "Interview Confirmed",
    },
    {
      vacancy: "Daniel Roberts",
      client: "ICT Teacher",
      id: "Friday",
      updated: "14:30",
      status: "Feedback Outstanding",
    },
  ],
};

export default function ActivityFeed() {
  const [activeTab, setActiveTab] =
    useState("Applications");

  const rows =
    data[activeTab as keyof typeof data];

  return (
    <section className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            What&#39;s New
          </h2>

          <p className="mt-2 text-gray-500">
            Everything that&#39;s changed across your vacancies in the last 24 hours.
          </p>

        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-[#00A384] transition hover:opacity-80">

          View Activity

          <ArrowUpRight size={16} />

        </button>

      </div>

      <div className="flex flex-1 flex-col px-8 py-6">

        <div className="flex flex-wrap gap-3">

          {tabs.map((tab) => (

            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === tab.name
                  ? "border-[#00A384] bg-[#F8FFFD] text-[#00A384]"
                  : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >

              <span className={`h-2.5 w-2.5 rounded-full ${tab.color}`} />

              {tab.name}

              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                {tab.count}
              </span>

            </button>

          ))}

        </div>

        <div className="mt-6 flex-1 overflow-y-auto rounded-2xl border border-gray-200">

          <table className="w-full">

            <thead className="sticky top-0 bg-gray-50">

              <tr className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">

                <th className="px-6 py-4">
                  Vacancy
                </th>

                <th className="px-6 py-4">
                  Client
                </th>

                <th className="px-6 py-4">
                  Reference
                </th>

                <th className="px-6 py-4">
                  Updated
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row, index) => (

                <tr
                  key={index}
                  className="cursor-pointer border-t border-gray-100 transition hover:bg-[#F8FFFD]"
                >

                  <td className="px-6 py-5">

                    <div className="font-semibold text-gray-900">
                      {row.vacancy}
                    </div>

                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {row.client}
                  </td>

                  <td className="px-6 py-5 font-mono text-sm text-gray-500">
                    {row.id}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-500">
                    {row.updated}
                  </td>

                  <td className="px-6 py-5">

                    <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F8F4] px-3 py-1.5 text-xs font-semibold text-[#00A384]">

                      <span className="h-2 w-2 rounded-full bg-[#00A384]" />

                      {row.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}