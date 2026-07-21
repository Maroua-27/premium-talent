import AppLayout from "@/components/layout/AppLayout";
import DashboardHeader from "@/components/layout/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import SubjectCapacityGrid from "@/components/dashboard/SubjectCapacityGrid";
import SearchBar from "@/components/filters/SearchBar";
import PremiumTable from "@/components/talent/PremiumTable";
import EligibilityCriteria from "@/components/dashboard/EligibilityCriteria";

export default function PremiumTalentPage() {
  return (
    <AppLayout>
      {/* Header */}
      <DashboardHeader />

      {/* KPI Cards */}
      <div className="mt-8">
        <DashboardStats />
      </div>

      {/* Subject Capacity */}
      <div className="mt-8">
        <SubjectCapacityGrid />
      </div>

      {/* Search */}
      <div className="mt-8">
        <SearchBar />
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-12 gap-8">
        {/* Candidate Table */}
        <div className="col-span-9">
          <PremiumTable />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          <EligibilityCriteria />
        </div>
      </div>
    </AppLayout>
  );
}