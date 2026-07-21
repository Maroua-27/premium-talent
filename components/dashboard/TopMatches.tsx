export default function TopMatches() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold">
        AI Match Preview
      </h3>

      <div className="mt-5 rounded-2xl bg-[#F7FFFC] p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">
            Sarah Mitchell
          </h4>

          <span className="rounded-full bg-[#00A384] px-3 py-1 text-xs font-bold text-white">
            98%
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>✓ British Curriculum</li>
          <li>✓ QTS Qualified</li>
          <li>✓ Immediate Start</li>
          <li>✓ Salary within budget</li>
        </ul>
      </div>
    </div>
  );
}