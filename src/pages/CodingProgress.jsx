import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus, ChevronDown, CheckCircle2, Clock, AlertCircle, RotateCcw } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";
import { codingProblems, dashboardStats } from "../data/dummyData";

const statusIcons = { Completed: CheckCircle2, "In Progress": Clock, "Not Started": AlertCircle, Revision: RotateCcw };
const statusColors = { Completed: "green", "In Progress": "yellow", "Not Started": "red", Revision: "purple" };
const difficultyColors = { Easy: "green", Medium: "yellow", Hard: "red" };

export default function CodingProgress() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const difficultyCounts = {
    Easy: codingProblems.filter((p) => p.difficulty === "Easy").length,
    Medium: codingProblems.filter((p) => p.difficulty === "Medium").length,
    Hard: codingProblems.filter((p) => p.difficulty === "Hard").length,
  };

  const filtered = codingProblems.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Coding Progress</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track your problem-solving journey</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" /> Add Problem
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(difficultyCounts).map(([key, value]) => (
          <GlassCard key={key} className="text-center py-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            <Badge color={difficultyColors[key]}>{key}</Badge>
          </GlassCard>
        ))}
        <GlassCard className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{codingProblems.length}</p>
          <Badge color="blue">Total</Badge>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-sm"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Completed", "In Progress", "Not Started"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary-500/15 text-primary-600 dark:text-primary-400"
                    : "text-gray-500 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-gray-700/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700/50">
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Title</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden sm:table-cell">Topic</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden md:table-cell">Difficulty</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden lg:table-cell">Platform</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden lg:table-cell">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((problem, idx) => {
                const StatusIcon = statusIcons[problem.status];
                return (
                  <motion.tr
                    key={problem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors cursor-pointer"
                  >
                    <td className="py-3 px-2">
                      <StatusIcon className={`w-5 h-5 ${problem.status === "Completed" ? "text-emerald-500" : problem.status === "In Progress" ? "text-amber-500" : "text-gray-400"}`} />
                    </td>
                    <td className="py-3 px-2 font-medium text-gray-900 dark:text-white">{problem.title}</td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{problem.topic}</td>
                    <td className="py-3 px-2 hidden md:table-cell"><Badge color={difficultyColors[problem.difficulty]}>{problem.difficulty}</Badge></td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400 hidden lg:table-cell">{problem.platform}</td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400 hidden lg:table-cell">{problem.dateSolved || "-"}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Overall Progress</h3>
        <ProgressBar value={dashboardStats.problemsSolved} max={dashboardStats.totalProblems} size="lg" color="primary" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <p className="text-xs text-gray-400">Completed</p>
            <p className="text-lg font-bold text-emerald-500">{codingProblems.filter(p => p.status === "Completed").length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">In Progress</p>
            <p className="text-lg font-bold text-amber-500">{codingProblems.filter(p => p.status === "In Progress").length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Not Started</p>
            <p className="text-lg font-bold text-gray-400">{codingProblems.filter(p => p.status === "Not Started").length}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
