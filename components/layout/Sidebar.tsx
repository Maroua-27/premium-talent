"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
  LayoutDashboard,
  Users,
  School,
  BarChart3,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const demoPages = [
  {
    name: "Premium Talent",
    href: "/premium-talent",
    icon: Star,
  },
  {
    name: "Nominate Candidate",
    href: "/nominations",
    icon: UserPlus,
  },
  {
    name: "Pending Approvals",
    href: "/pending-approvals",
    icon: ClipboardCheck,
  },
  {
    name: "Match to Vacancy",
    href: "/match",
    icon: Briefcase,
  },
];

const placeholderPages = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Candidates",
    icon: Users,
  },
  {
    name: "Schools",
    icon: School,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    icon: FileText,
  },
  {
    name: "Notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-[#0F172A] text-white">

      <div className="border-b border-white/10 p-8">

        <h1 className="text-4xl font-bold text-[#00A384]">
          Teach East
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Premium Talent Demo
        </p>

      </div>

      <nav className="flex-1 space-y-10 px-5 py-8">

        <div>

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Demo Workflow
          </p>

          <div className="space-y-2">

            {demoPages.map((item) => {
              const Icon = item.icon;

              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    active
                      ? "bg-[#00A384] text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}

          </div>

        </div>

        <div>

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Other Modules
          </p>

          <div className="space-y-2">

            {placeholderPages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-gray-500"
                >
                  <Icon size={18} />
                  {item.name}
                </div>
              );
            })}

          </div>

        </div>

      </nav>

      <div className="border-t border-white/10 p-5">

        <div className="rounded-2xl bg-white/5 p-4">

          <p className="text-xs text-gray-400">
            Concept Version
          </p>

          <p className="mt-1 font-semibold">
            Premium Talent v1.0
          </p>

        </div>

      </div>

    </aside>
  );
}