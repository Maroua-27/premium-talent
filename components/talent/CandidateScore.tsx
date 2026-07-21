interface Props {
  days: number;
}

export default function CandidateScore({
  days,
}: Props) {
  let color = "#00A384";
  let label = "Fresh";

  if (days <= 14) {
    color = "#F59E0B";
    label = "Due Soon";
  }

  if (days <= 0) {
    color = "#EF4444";
    label = "Expired";
  }

  return (
    <div className="flex flex-col items-center">

      <div
        className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] font-bold text-lg"
        style={{
          borderColor: color,
          color,
        }}
      >
        {days <= 0 ? "!" : days}
      </div>

      <span
        className="mt-2 text-xs font-semibold"
        style={{
          color,
        }}
      >
        {label}
      </span>

    </div>
  );
}