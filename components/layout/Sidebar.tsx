"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Star,
  UserPlus,
  Briefcase,
  ShieldCheck,
  Calendar,
  CheckSquare,
  Users,
  Building2,
  FileCheck,
  Mail,
  UserCog,
  Globe,
  LifeBuoy,
} from "lucide-react";

const homePages = [
  {
    name: "Consultant",
    href: "/overview",
    icon: Home,
  },
  {
    name: "Resourcer",
    href: "/overview-v2",
    icon: Home,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    name: "Tasks",
    href: "#",
    icon: CheckSquare,
    disabled: true,
  },
];

const premiumTalentPages = [
  {
    name: "Premium Talent Pool",
    href: "/premium-talent",
    icon: Star,
  },
  {
    name: "Add Candidate",
    href: "/nominations",
    icon: UserPlus,
  },
  {
    name: "Match to Vacancy",
    href: "/match",
    icon: Briefcase,
  },
  {
    name: "Eligibility Rules",
    href: "/settings",
    icon: ShieldCheck,
  },
];

const talentPages = [
  {
    name: "Jobs",
    href: "#",
    icon: Briefcase,
    disabled: true,
  },
  {
    name: "Interviews",
    href: "#",
    icon: Calendar,
    disabled: true,
  },
  {
    name: "Offers",
    href: "#",
    icon: Users,
    disabled: true,
  },
  {
    name: "Visa",
    href: "#",
    icon: FileCheck,
    disabled: true,
  },
];

const internalPages = [
  {
    name: "Candidate Pool",
    href: "#",
    icon: Users,
    disabled: true,
  },
  {
    name: "Clients",
    href: "#",
    icon: Building2,
    disabled: true,
  },
  {
    name: "Compliance",
    href: "#",
    icon: FileCheck,
    disabled: true,
  },
  {
    name: "Mailshot",
    href: "#",
    icon: Mail,
    disabled: true,
  },
];

const managementPages = [
  {
    name: "Users",
    href: "#",
    icon: UserCog,
    disabled: true,
  },
  {
    name: "Career Site",
    href: "#",
    icon: Globe,
    disabled: true,
  },
];
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-[#0F172A] text-white">

      {/* Logo */}

      <div className="border-b border-white/10 p-8">

        <Link href="/overview">

          <h1 className="text-4xl font-bold text-[#00A384] hover:opacity-90">
            Teach East
          </h1>

        </Link>

        <p className="mt-2 text-sm text-gray-400">
          Recruitment Platform Prototype
        </p>

      </div>

      <nav className="flex-1 overflow-y-auto px-5 py-8">

        {/* Home */}

        <SidebarSection title="Home">

          {homePages.map((item) => {

            const Icon = item.icon;

            if (item.disabled) {
              return (
                <SidebarPlaceholder
                  key={item.name}
                  icon={<Icon size={18} />}
                  name={item.name}
                />
              );
            }

            return (
              <SidebarLink
                key={item.name}
                href={item.href}
                icon={<Icon size={18} />}
                active={pathname === item.href}
              >
                {item.name}
              </SidebarLink>
            );

          })}

        </SidebarSection>

        {/* Premium Talent */}

        <SidebarSection title="Premium Talent">

          {premiumTalentPages.map((item) => {

            const Icon = item.icon;

            return (
              <SidebarLink
                key={item.name}
                href={item.href}
                icon={<Icon size={18} />}
                active={pathname === item.href}
              >
                {item.name}
              </SidebarLink>
            );

          })}

        </SidebarSection>

        {/* Talent & Recruitment */}

        <SidebarSection title="Talent & Recruitment">

          {talentPages.map((item) => {

            const Icon = item.icon;

            if (item.disabled) {
              return (
                <SidebarPlaceholder
                  key={item.name}
                  icon={<Icon size={18} />}
                  name={item.name}
                />
              );
            }

            return (
              <SidebarLink
                key={item.name}
                href={item.href}
                icon={<Icon size={18} />}
                active={pathname === item.href}
              >
                {item.name}
              </SidebarLink>
            );

          })}

        </SidebarSection>

        {/* Internal */}

        <SidebarSection title="Internal">

          {internalPages.map((item) => {

            const Icon = item.icon;

            if (item.disabled) {
              return (
                <SidebarPlaceholder
                  key={item.name}
                  icon={<Icon size={18} />}
                  name={item.name}
                />
              );
            }

            return (
              <SidebarLink
                key={item.name}
                href={item.href}
                icon={<Icon size={18} />}
                active={pathname === item.href}
              >
                {item.name}
              </SidebarLink>
            );

          })}

        </SidebarSection>

        {/* Management */}

        <SidebarSection title="Management">

          {managementPages.map((item) => {

            const Icon = item.icon;

            if (item.disabled) {
              return (
                <SidebarPlaceholder
                  key={item.name}
                  icon={<Icon size={18} />}
                  name={item.name}
                />
              );
            }

            return (
              <SidebarLink
                key={item.name}
                href={item.href}
                icon={<Icon size={18} />}
                active={pathname === item.href}
              >
                {item.name}
              </SidebarLink>
            );

          })}

        </SidebarSection>

        {/* Help */}

        <SidebarSection title="Help & Support">

          <SidebarPlaceholder
            icon={<LifeBuoy size={18} />}
            name="Help & Support"
          />

        </SidebarSection>

      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <div className="rounded-2xl bg-white/5 p-4">

          <p className="text-xs text-gray-400">
            Prototype
          </p>

          <p className="mt-1 font-semibold">
            Teach East Platform
          </p>

          <p className="mt-1 text-xs text-gray-500">
            July 2026
          </p>

        </div>

      </div>

    </aside>
  );
}
interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

function SidebarSection({
  title,
  children,
}: SidebarSectionProps) {
  return (
    <div className="mb-10">

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <div className="space-y-2">
        {children}
      </div>

    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SidebarLink({
  href,
  active,
  icon,
  children,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
        active
          ? "bg-[#00A384] text-white shadow-lg"
          : "text-gray-300 hover:bg-white/10"
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}

interface SidebarPlaceholderProps {
  icon: React.ReactNode;
  name: string;
}

function SidebarPlaceholder({
  icon,
  name,
}: SidebarPlaceholderProps) {
  return (
    <div className="flex cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-gray-500">
      {icon}
      {name}
    </div>
  );
}