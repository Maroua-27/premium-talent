import AppLayout from "@/components/layout/AppLayout";
import PendingApprovalsPage from "@/components/pending/PendingApprovalsPage";

export default function Page() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            Pending Approvals
          </h1>

          <p className="mt-3 text-gray-500">
            Review candidate nominations submitted by consultants before they
            are added to the Premium Talent Programme.
          </p>

        </div>

        <PendingApprovalsPage />

      </div>
    </AppLayout>
  );
}