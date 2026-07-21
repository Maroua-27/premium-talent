interface BarrierBadgeProps {
  barrier: string;
}

export default function BarrierBadge({
  barrier,
}: BarrierBadgeProps) {
  return (
    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
      {barrier}
    </span>
  );
}