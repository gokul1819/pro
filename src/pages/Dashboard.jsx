import { motion } from "framer-motion";
import { Code2, Brain, FileText, Calendar, TrendingUp, Target, Award, Zap } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import StatCard from "../components/ui/StatCard";
import WeeklyActivityChart from "../components/charts/WeeklyActivityChart";
import ProgressOverTimeChart from "../components/charts/ProgressOverTimeChart";
import RadarSkillChart from "../components/charts/RadarSkillChart";
import { dashboardStats, goals, achievements } from "../data/dummyData";

const container = { initial: {}, animate: { transition: { staggerChildren: 0.08 } } };
const item = { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

export default function Dashboard() {
  return (
    <motion.div initial="initial" animate="animate" variants={container} className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Here's your career preparation overview</p>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Code2} label="Problems Solved" value={`${dashboardStats.problemsSolved}/${dashboardStats.totalProblems}`} subtext="Coding Progress" trend={12} color="primary" />
        <StatCard icon={Brain} label="Aptitude Score" value={`${dashboardStats.aptitudeScore}%`} subtext="Overall Score" trend={5} color="emerald" />
        <StatCard icon={FileText} label="Resume Score" value={`${dashboardStats.resumeScore}/100`} subtext="AI Rating" trend={8} color="amber" />
        <StatCard icon={Calendar} label="Interviews" value={dashboardStats.interviewsCompleted} subtext={`${dashboardStats.upcomingInterviews} Upcoming`} trend={-2} color="violet" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Weekly Activity</h3>
              <span className="text-xs text-gray-400">This week</span>
            </div>
            <WeeklyActivityChart data={dashboardStats.weeklyActivity} />
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Progress Over Time</h3>
              <span className="text-xs text-gray-400">6 months</span>
            </div>
            <ProgressOverTimeChart data={dashboardStats.progressOverTime} />
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-1">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Skill Distribution</h3>
              <Target className="w-4 h-4 text-gray-400" />
            </div>
            <RadarSkillChart data={dashboardStats.skillDistribution} />
          </GlassCard>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-1">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Today's Goals</h3>
              <Award className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-3">
              {goals.slice(0, 4).map((goal) => (
                <div key={goal.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${goal.completed ? "bg-emerald-500 border-emerald-500" : "border-gray-300 dark:border-gray-600"}`}>
                    {goal.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${goal.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-white"}`}>{goal.title}</p>
                    <p className="text-xs text-gray-400">{goal.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-1">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Achievements</h3>
              <Zap className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${achievement.unlocked ? "bg-amber-500/10 border-amber-500/20" : "bg-white/20 dark:bg-gray-800/20 border-gray-100 dark:border-gray-700/30 opacity-50"}`}>
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{achievement.title}</p>
                    <p className="text-xs text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
