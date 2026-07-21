interface AvailabilityBadgeProps {
  availability: string;
}

export default function AvailabilityBadge({
  availability,
}: AvailabilityBadgeProps) {
  const styles: Record<string, string> = {
    Immediate: "bg-emerald-100 text-emerald-700",
    "2 Weeks": "bg-amber-100 text-amber-700",
    "1 Month": "bg-orange-100 text-orange-700",
    "August 2026": "bg-sky-100 text-sky-700",
    "September 2026": "bg-indigo-100 text-indigo-700",
    "January 2027": "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[availability] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {availability}
    </span>
  );
}