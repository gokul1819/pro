import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import {
  LayoutDashboard, Code2, Brain, FileText, Calendar, Settings, LogOut, GraduationCap, ChevronLeft, ChevronRight, X
} from "lucide-react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/coding", icon: Code2, label: "Coding Progress" },
  { to: "/aptitude", icon: Brain, label: "Aptitude Tracker" },
  { to: "/resume", icon: FileText, label: "Resume Score" },
  { to: "/interviews", icon: Calendar, label: "Mock Interviews" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50",
        "flex flex-col",
        "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl backdrop-filter",
        "border-r border-white/20 dark:border-gray-700/30",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-700/30">
          <div className={cn("flex items-center gap-3", collapsed && "lg:justify-center")}>
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25">
              <GraduationCap className="w-6 h-6" />
            </div>
            {!collapsed && (
              <span className="font-bold text-lg text-gray-900 dark:text-white whitespace-nowrap">
                CareerAI
              </span>
            )}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 text-gray-500 dark:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                isActive
                  ? "bg-primary-500/15 text-primary-600 dark:text-primary-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/30 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-white/20 dark:border-gray-700/30">
          <button className={cn(
            "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200",
            "text-gray-600 dark:text-gray-400 hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400"
          )}>
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center p-3 border-t border-white/20 dark:border-gray-700/30 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </aside>
    </>
  );
}
