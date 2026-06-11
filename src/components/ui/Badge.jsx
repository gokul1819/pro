import { cn } from "../../utils/cn";

const colors = {
  green: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  blue: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
  yellow: "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
  red: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30",
  purple: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
  gray: "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30",
};

export default function Badge({ children, color = "gray", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        colors[color] || colors.gray,
        className
      )}
    >
      {children}
    </span>
  );
}
