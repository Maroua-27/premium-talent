import {
  BookOpen,
  FlaskConical,
  Crown,
  Calculator,
  School,
} from "lucide-react";

interface Props {
  subject: string;
  current: number;
  max: number;
}

export default function SubjectCard({
  subject,
  current,
  max,
}: Props) {
  const percentage = (current / max) * 100;

  let color = "#00A384";

  if (current < 20) color = "#EF4444";
  else if (current < 40) color = "#F59E0B";

  const getIcon = () => {
    switch (subject) {
      case "Primary":
        return <School size={18} color="#00A384" />;

      case "English":
        return <BookOpen size={18} color="#8B5CF6" />;

      case "Mathematics":
        return <Calculator size={18} color="#10B981" />;

      case "Science":
        return <FlaskConical size={18} color="#3B82F6" />;

      case "Leadership":
        return <Crown size={18} color="#F59E0B" />;

      default:
        return <School size={18} color="#00A384" />;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gray-50 p-2">
            {getIcon()}
          </div>

          <span className="font-medium text-gray-700">
            {subject}
          </span>

        </div>

        <span className="font-semibold text-gray-900">
          {current} / {max}
        </span>

      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-2 rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />

      </div>
    </div>
  );
}