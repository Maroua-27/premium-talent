import {
  Users,
  Clock3,
  ClipboardCheck,
  Briefcase,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-6">

      <StatCard
        title="Premium Teachers"
        value="248"
        subtitle="Currently in the Premium Talent Programme"
        icon={Users}
        iconColor="#00A384"
        iconBackground="#E8F8F4"
      />

      <StatCard
        title="Profiles Due for Review"
        value="18"
        subtitle="7 profiles expire this week"
        icon={Clock3}
        iconColor="#F59E0B"
        iconBackground="#FFF7E6"
      />

      <StatCard
        title="Pending Nominations"
        value="12"
        subtitle="Awaiting manager approval"
        icon={ClipboardCheck}
        iconColor="#BC2686"
        iconBackground="#FCEAF5"
      />

      <StatCard
        title="Ready to Match"
        value="214"
        subtitle="Verified within the last 30 days"
        icon={Briefcase}
        iconColor="#2563EB"
        iconBackground="#EAF2FF"
      />

    </section>
  );
}