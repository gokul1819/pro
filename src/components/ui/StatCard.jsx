import { cn } from "../../utils/cn";
import GlassCard from "./GlassCard";

export default function StatCard({ icon: Icon, label, value, subtext, trend, color = "primary" }) {
  const colors = {
    primary: "from-primary-500 to-primary-600",
    emerald: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
    violet: "from-violet-500 to-violet-600",
    rose: "from-rose-500 to-rose-600",
    blue: "from-blue-500 to-blue-600",
  };

  return (
    <GlassCard className="relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-8 translate-x-8">
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${colors[color] || colors.primary} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
      </div>
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{label}</p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
          {subtext && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtext}</p>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl bg-gradient-to-br shadow-lg",
          colors[color],
          "text-white"
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {trend && (
        <div className="mt-3 flex items-center gap-1 text-xs">
          <span className={trend > 0 ? "text-emerald-500" : "text-red-500"}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
          <span className="text-gray-400">vs last week</span>
        </div>
      )}
    </GlassCard>
  );
}
