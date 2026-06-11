import { cn } from "../../utils/cn";

const variants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25",
  secondary: "bg-white/20 dark:bg-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-700/50 text-gray-800 dark:text-gray-200 border border-white/20 dark:border-gray-600/30",
  ghost: "hover:bg-white/10 dark:hover:bg-gray-700/20 text-gray-700 dark:text-gray-300",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({ children, variant = "primary", size = "md", className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
