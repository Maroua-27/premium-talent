import Link from "next/link";
import {
  Star,
  UserPlus,
  ClipboardCheck,
  Briefcase,
  ArrowRight,
  Users,
  School,
  FileText,
  BarChart3,
  Bell,
  Settings,
  Building2,
  CalendarDays,
} from "lucide-react";

const pages = [
  {
    title: "Premium Talent Pool",
    description:
      "Browse Teach East's curated premium educators ready for international placement.",
    href: "/premium-talent",
    icon: Star,
    color: "bg-emerald-500",
    live: true,
  },
  {
    title: "Nominate Candidate",
    description:
      "Submit a consultant nomination into the Premium Talent Programme.",
    href: "/nominations",
    icon: UserPlus,
    color: "bg-sky-500",
    live: true,
  },
  {
    title: "Pending Approvals",
    description:
      "Luke reviews and approves Premium Talent nominations.",
    href: "/pending-approvals",
    icon: ClipboardCheck,
    color: "bg-amber-500",
    live: true,
  },
  {
    title: "Match to Vacancy",
    description:
      "Match Premium Talent candidates to suitable vacancies.",
    href: "/match",
    icon: Briefcase,
    color: "bg-violet-500",
    live: true,
  },

  // Future Platform

  {
    title: "Candidates",
    description:
      "Complete Teach East candidate database.",
    href: "#",
    icon: Users,
    color: "bg-slate-500",
    live: false,
  },
  {
    title: "Vacancies",
    description:
      "Manage vacancies, consultants and school assignments.",
    href: "#",
    icon: FileText,
    color: "bg-rose-500",
    live: false,
  },
  {
    title: "Schools",
    description:
      "Partner schools and hiring history.",
    href: "#",
    icon: School,
    color: "bg-indigo-500",
    live: false,
  },
  {
    title: "Clients",
    description:
      "Client schools and recruitment relationships.",
    href: "#",
    icon: Building2,
    color: "bg-pink-500",
    live: false,
  },
  {
    title: "Interviews",
    description:
      "Interview scheduling and feedback.",
    href: "#",
    icon: CalendarDays,
    color: "bg-orange-500",
    live: false,
  },
  {
    title: "Analytics",
    description:
      "Recruitment insights and reporting.",
    href: "#",
    icon: BarChart3,
    color: "bg-cyan-500",
    live: false,
  },
  {
    title: "Notifications",
    description:
      "Approvals, reminders and activity.",
    href: "#",
    icon: Bell,
    color: "bg-yellow-500",
    live: false,
  },
  {
    title: "Settings",
    description:
      "Platform settings and permissions.",
    href: "#",
    icon: Settings,
    color: "bg-gray-600",
    live: false,
  },
];