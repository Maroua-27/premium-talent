"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Star,
  Users,
  Briefcase,
  School,
  BarChart3,
  FileText,
  Settings,
  Bell,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "#",
  },
  {
    title: "Premium Talent",
    icon: Star,
    href: "/premium-talent",
    active: true,
  },
  {
    title: "Candidates",
    icon: Users,
    href: "#",
  },
  {
    title: "Vacancies",
    icon: Briefcase,
    href: "#",
  },
  {
    title: "Schools",
    icon: School,
    href: "#",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "#",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "#",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0F172A] text-white flex flex-col">
      <div className="border-b border-slate-700 p-8">
        <div className="text-3xl font-bold text-[#00A384]">
          Teach East
        </div>

        <p className="mt-2 text-sm text-slate-400">
          Premium Talent
        </p>
      </div>

      <nav className="flex-1 p-5">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center gap-4 rounded-xl px-4 py-4 transition
              ${
                item.active
                  ? "bg-[#00A384] text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-6">
        <div className="rounded-xl bg-slate-800 p-4">
          <div className="text-sm text-slate-400">
            Current Version
          </div>

          <div className="mt-1 font-semibold">
            Concept v1.0
          </div>
        </div>
      </div>
    </aside>
  );
}