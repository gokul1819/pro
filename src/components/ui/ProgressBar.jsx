import { cn } from "../../utils/cn";

export default function ProgressBar({ value = 0, max = 100, size = "md", color = "primary", showLabel = true, className }) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  const colors = {
    primary: "bg-primary-500",
    green: "bg-emerald-500",
    blue: "bg-blue-500",
    yellow: "bg-amber-500",
    red: "bg-red-500",
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-xs text-gray-600 dark:text-gray-400">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden", heights[size])}>
        <div
          className={cn("rounded-full transition-all duration-500 ease-out", heights[size], colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
