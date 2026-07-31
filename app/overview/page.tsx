import AppLayout from "@/components/layout/AppLayout";

import HomeHeader from "@/components/home/HomeHeader";
import WorkloadCards from "@/components/home/WorkloadCards";
import ActivityFeed from "@/components/home/ActivityFeed";
import WeeklySchedule from "@/components/home/WeeklySchedule";
import VacanciesNeedingAttention from "@/components/home/VacanciesNeedingAttention";

export default function OverviewPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-[1600px] px-8 py-10">

        {/* Header */}

        <HomeHeader />

        {/* KPI Cards */}

        <div className="mt-10">

          <WorkloadCards />

        </div>

        {/* What's New + Weekly Planner */}

        <div className="mt-12 grid grid-cols-12 gap-8">

          <div className="col-span-8">

            <ActivityFeed />

          </div>

          <div className="col-span-4">

            <WeeklySchedule />

          </div>

        </div>

        {/* Priorities */}

        <div className="mt-10">

          <VacanciesNeedingAttention />

        </div>

      </div>
    </AppLayout>
  );
}