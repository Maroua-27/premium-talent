import AppLayout from "@/components/layout/AppLayout";

import ComplianceTable from "@/components/home-v2/ComplianceTable";
import ConsultantRequests from "@/components/home-v2/ConsultantRequests";
import HomeHeaderV2 from "@/components/home-v2/HomeHeader";
import PremiumTalentTable from "@/components/home-v2/PremiumTalentTable";
import RegistrationStatus from "@/components/home-v2/RegistrationStatus";
import SelfRegisteredBanner from "@/components/home-v2/SelfRegisteredBanner";
import WeeklyScheduleV2 from "@/components/home-v2/WeeklySchedule";
import WorkloadCardsV2 from "@/components/home-v2/WorkloadCards";

export default function OverviewV2Page() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-[1600px] px-8 py-10">

        {/* Header */}

        <HomeHeaderV2 />

        {/* Self Registered Queue */}

        <div className="mt-8">
          <SelfRegisteredBanner />
        </div>

        {/* KPI Cards */}

        <div className="mt-8">
          <WorkloadCardsV2 />
        </div>

        {/* Consultant Requests + Schedule */}

        <div className="mt-10 grid grid-cols-12 gap-8">

          <div className="col-span-8">
            <ConsultantRequests />
          </div>

          <div className="col-span-4">
            <WeeklyScheduleV2 />
          </div>

        </div>

        {/* Registration Status */}

        <div className="mt-10">
          <RegistrationStatus />
        </div>

        {/* Compliance + Premium Talent */}

        <div className="mt-10 grid grid-cols-12 gap-8">

          <div className="col-span-6">
            <ComplianceTable />
          </div>

          <div className="col-span-6">
            <PremiumTalentTable />
          </div>

        </div>

      </div>
    </AppLayout>
  );
}