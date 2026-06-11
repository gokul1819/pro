import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Shield, Palette, Globe, User, Key, ChevronRight, Moon, Sun } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import { useTheme } from "../context/ThemeContext";

const sections = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "appearance", icon: Palette, label: "Appearance" },
  { id: "notifications", icon: Bell, label: "Notifications" },
  { id: "privacy", icon: Shield, label: "Privacy" },
  { id: "preferences", icon: Globe, label: "Preferences" },
];

export default function Settings() {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("appearance");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false,
    achievements: true,
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <GlassCard className="lg:col-span-1">
          <nav className="space-y-1">
            {sections.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === id
                    ? "bg-primary-500/15 text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-gray-700/30"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </nav>
        </GlassCard>

        <GlassCard className="lg:col-span-3">
          {activeSection === "appearance" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appearance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Customize how the dashboard looks</p>

              <div className="p-4 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {darkMode ? <Moon className="w-5 h-5 text-gray-400" /> : <Sun className="w-5 h-5 text-gray-400" />}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</p>
                      <p className="text-xs text-gray-400">Toggle between light and dark themes</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`relative w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-primary-500" : "bg-gray-300"}`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${darkMode ? "translate-x-6" : "translate-x-0.5"}`} />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Accent Color</p>
                <div className="flex gap-3">
                  {["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-white/50 dark:border-gray-700 shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Layout Density</p>
                <div className="flex gap-3">
                  {["Compact", "Comfortable", "Spacious"].map((d) => (
                    <button key={d} className="px-4 py-2 rounded-xl text-sm font-medium bg-white/20 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500/50 transition-colors">
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button>Save Changes</Button>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your notification preferences</p>

              <div className="space-y-3">
                {[
                  { key: "email", label: "Email Notifications", desc: "Receive email updates about your progress" },
                  { key: "push", label: "Push Notifications", desc: "Get push notifications in your browser" },
                  { key: "weekly", label: "Weekly Report", desc: "Receive a weekly summary of your activity" },
                  { key: "achievements", label: "Achievement Alerts", desc: "Get notified when you unlock achievements" },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, [key]: !notifications[key] })}
                      className={`relative w-12 h-6 rounded-full transition-colors ${notifications[key] ? "bg-primary-500" : "bg-gray-300 dark:bg-gray-600"}`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notifications[key] ? "translate-x-6" : "translate-x-0.5"}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "profile" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Update your personal information</p>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">AJ</div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Alex Johnson</p>
                  <p className="text-sm text-gray-400">alex.johnson@example.com</p>
                  <button className="text-xs text-primary-500 hover:underline mt-1">Change avatar</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                  <input type="text" defaultValue="Alex Johnson" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input type="email" defaultValue="alex.johnson@example.com" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Role</label>
                  <input type="text" defaultValue="Software Engineer" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Location</label>
                  <input type="text" defaultValue="San Francisco, CA" className="w-full px-4 py-2.5 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/30" />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button>Save Changes</Button>
              </div>
            </div>
          )}

          {(activeSection === "privacy" || activeSection === "preferences") && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">{activeSection}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activeSection === "privacy" ? "Manage your privacy and security settings" : "Customize your dashboard preferences"}
              </p>

              <div className="space-y-3">
                {[
                  { label: activeSection === "privacy" ? "Profile Visibility" : "Language", desc: activeSection === "privacy" ? "Control who can see your profile" : "Select your preferred language" },
                  { label: activeSection === "privacy" ? "Data Sharing" : "Time Zone", desc: activeSection === "privacy" ? "Allow anonymous usage data collection" : "Set your local time zone" },
                  { label: activeSection === "privacy" ? "Two-Factor Auth" : "Currency", desc: activeSection === "privacy" ? "Add an extra layer of security" : "Select your preferred currency" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-center justify-between p-4 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                    <button className="px-4 py-1.5 text-xs font-medium rounded-lg bg-white/20 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-500/50 transition-colors">
                      Configure
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </motion.div>
  );
}
