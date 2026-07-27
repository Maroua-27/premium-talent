import AppLayout from "@/components/layout/AppLayout";
import NominationForm from "@/components/nominations/NominationForm";

export default function NominationsPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            Add Candidate
          </h1>

          <p className="mt-3 text-gray-500">
            Add a candidate to the Teach East Premium Talent Programme.
            Complete the eligibility checklist, add any recruiter notes,
            and include the candidate in the Premium Talent Pool.
          </p>

        </div>

        <NominationForm />

      </div>
    </AppLayout>
  );
}