import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6F8FB]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Teach East
        </h1>

        <p className="mt-4 text-gray-600">
          Premium Talent Pool Concept
        </p>

        <Link
          href="/premium-talent"
          className="mt-10 inline-flex rounded-xl bg-[#00A384] px-8 py-4 text-white font-semibold transition hover:opacity-90"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}