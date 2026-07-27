import {
  Users,
  Clock3,
 UserPlus,
  Briefcase,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-6">

      <StatCard
        title="Premium Teachers"
        value="248"
        subtitle="Currently in the Premium Talent Pool"
        icon={Users}
        iconColor="#00A384"
        iconBackground="#E8F8F4"
      />

      <StatCard
        title="40-Day Reviews Due"
        value="18"
        subtitle="7 profiles require a catch-up this week"
        icon={Clock3}
        iconColor="#F59E0B"
        iconBackground="#FFF7E6"
      />

      <StatCard
        title="Candidates Added This Month"
        value="21"
        subtitle="Successfully added to Premium Talent"
        icon={UserPlus}
        iconColor="#BC2686"
        iconBackground="#FCEAF5"
      />

      <StatCard
        title="Ready to Match"
        value="214"
        subtitle="Verified and available for submission"
        icon={Briefcase}
        iconColor="#2563EB"
        iconBackground="#EAF2FF"
      />

    </section>
  );
}