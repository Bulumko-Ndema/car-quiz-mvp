"use client";
export default function Progress({ current, total }: { current: number; total: number }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-primary" style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}
