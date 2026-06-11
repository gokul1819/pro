import { cn } from "../../utils/cn";

export default function Input({ label, error, className, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-2.5 rounded-xl",
          "bg-white/50 dark:bg-gray-800/50",
          "border border-gray-200 dark:border-gray-700",
          "text-gray-900 dark:text-gray-100",
          "placeholder-gray-400 dark:placeholder-gray-500",
          "backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
          "transition-all duration-200",
          error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
