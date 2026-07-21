import AppLayout from "@/components/layout/AppLayout";
import NominationForm from "@/components/nominations/NominationForm";

export default function NominationsPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            Nominate Candidate
          </h1>

          <p className="mt-3 text-gray-500">
            Submit a candidate for inclusion in the Teach East Premium Talent Programme.
            Every nomination is reviewed by a manager before approval.
          </p>

        </div>

        <NominationForm />

      </div>
    </AppLayout>
  );
}