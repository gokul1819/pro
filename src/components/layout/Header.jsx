import { Menu, Moon, Sun, Bell, Search } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

export default function Header({ setMobileOpen }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl backdrop-filter border-b border-white/20 dark:border-gray-700/30">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/30 text-gray-600 dark:text-gray-400 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 focus-within:ring-2 focus-within:ring-primary-500/30 transition-all">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 w-48 lg:w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className={cn(
            "p-2 rounded-xl transition-all duration-200",
            "hover:bg-white/10 dark:hover:bg-gray-700/30",
            "text-gray-600 dark:text-gray-400"
          )}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="relative p-2 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/30 text-gray-600 dark:text-gray-400 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
        </button>

        <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-medium shadow-lg shadow-primary-500/25">
            AJ
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white leading-tight">Alex Johnson</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
}
