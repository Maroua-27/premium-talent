import AppLayout from "@/components/layout/AppLayout";

import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarToolbar from "@/components/calendar/CalendarToolbar";
import CalendarGrid from "@/components/calendar/CalendarGrid";
import CalendarSidebar from "@/components/calendar/CalendarSidebar";

export default function CalendarPage() {
  return (
    <AppLayout>
      <main className="min-h-screen bg-[#F6F8FB]">

        <div className="mx-auto max-w-[1800px] px-8 py-10">

          {/* Header */}

          <CalendarHeader />

          {/* Toolbar */}

          <div className="mt-8">

            <CalendarToolbar />

          </div>

          {/* Main Content */}

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">

            {/* Calendar */}

            <CalendarGrid />

            {/* Right Sidebar */}

            <CalendarSidebar />

          </div>

        </div>

      </main>
    </AppLayout>
  );
}