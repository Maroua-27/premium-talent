import { AlertCircle } from "lucide-react";

export default function ReviewAlerts() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <AlertCircle
          size={20}
          className="text-[#BC2686]"
        />

        <h3 className="font-bold">
          Review Alerts
        </h3>
      </div>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl bg-red-50 p-3">
          <p className="font-medium">
            12 candidates awaiting approval
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Review nominations submitted today.
          </p>
        </div>

        <div className="rounded-xl bg-yellow-50 p-3">
          <p className="font-medium">
            8 profiles need updating
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Availability older than 30 days.
          </p>
        </div>
      </div>
    </div>
  );
}