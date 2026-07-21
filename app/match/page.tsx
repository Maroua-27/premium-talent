import AppLayout from "@/components/layout/AppLayout";
import VacancyMatch from "@/components/match/VacancyMatch";

export default function MatchPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Match Candidate to Vacancy
          </h1>

          <p className="mt-3 text-gray-500">
            Select the most suitable vacancy for this premium candidate.
          </p>

        </div>

        <VacancyMatch />

      </div>
    </AppLayout>
  );
}