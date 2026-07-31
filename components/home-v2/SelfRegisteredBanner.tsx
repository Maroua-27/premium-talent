import { ArrowRight, CircleAlert } from "lucide-react";

export default function SelfRegisteredBanner() {
  return (
    <section className="flex items-center justify-between rounded-2xl border border-[#D7F3EC] bg-[#F8FFFD] px-6 py-5">

      <div className="flex items-center gap-4">

        <div className="rounded-full bg-[#E8F8F4] p-2">

          <CircleAlert
            size={20}
            className="text-[#00A384]"
          />

        </div>

        <div>

          <p className="font-semibold text-gray-900">
            18 self-registered candidates awaiting registration calls
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Prioritise these candidates before sourcing new candidates.
          </p>

        </div>

      </div>

      <button className="flex items-center gap-2 font-semibold text-[#00A384] transition hover:opacity-80">

        View Queue

        <ArrowRight size={18} />

      </button>

    </section>
  );
}