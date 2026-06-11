import { cn } from "../../utils/cn";

export default function GlassCard({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 dark:border-white/10",
        "bg-white/30 dark:bg-gray-800/30",
        "backdrop-blur-xl backdrop-filter",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        "p-6 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/30 dark:hover:border-primary-600/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
