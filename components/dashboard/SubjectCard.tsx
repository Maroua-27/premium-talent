import {
  BookOpen,
  FlaskConical,
  Crown,
  Calculator,
  School,
} from "lucide-react";

interface Props {
  subject: string;
  count: number;
}

export default function SubjectCard({
  subject,
  count,
}: Props) {

  const getIcon = () => {
    switch (subject) {
      case "Primary":
        return <School size={20} color="#00A384" />;

      case "English":
        return <BookOpen size={20} color="#8B5CF6" />;

      case "Mathematics":
        return <Calculator size={20} color="#10B981" />;

      case "Science":
        return <FlaskConical size={20} color="#3B82F6" />;

      case "Leadership":
        return <Crown size={20} color="#F59E0B" />;

      default:
        return <School size={20} color="#00A384" />;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gray-50 p-3">
            {getIcon()}
          </div>

          <div>

            <h3 className="font-semibold text-gray-900">
              {subject}
            </h3>

            <p className="text-sm text-gray-500">
              Premium Talent
            </p>

          </div>

        </div>

        <span className="rounded-full bg-[#E8F8F4] px-3 py-1 text-xs font-semibold text-[#00A384]">
          Unlimited
        </span>

      </div>

      <div className="mt-6">

        <p className="text-4xl font-bold text-gray-900">
          {count}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Premium Candidates
        </p>

      </div>

    </div>
  );
}