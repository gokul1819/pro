import { motion } from "framer-motion";
import { Brain, TrendingUp, Target, BarChart3 } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import ProgressBar from "../components/ui/ProgressBar";
import { aptitudeTopics } from "../data/dummyData";

const proficiencyColors = { Beginner: "red", Intermediate: "yellow", Advanced: "green", Expert: "purple" };

export default function AptitudeTracker() {
  const avgProgress = Math.round(aptitudeTopics.reduce((sum, t) => sum + t.progress, 0) / aptitudeTopics.length);
  const totalCorrect = aptitudeTopics.reduce((sum, t) => sum + t.correctAnswers, 0);
  const totalQ = aptitudeTopics.reduce((sum, t) => sum + t.totalQuestions, 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Aptitude Tracker</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Monitor your aptitude preparation across topics</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard className="text-center py-4">
          <Brain className="w-6 h-6 text-primary-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{aptitudeTopics.length}</p>
          <p className="text-xs text-gray-400">Topics</p>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <TrendingUp className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{avgProgress}%</p>
          <p className="text-xs text-gray-400">Avg Progress</p>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <Target className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalCorrect}/{totalQ}</p>
          <p className="text-xs text-gray-400">Correct</p>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <BarChart3 className="w-6 h-6 text-violet-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.round((totalCorrect / totalQ) * 100)}%</p>
          <p className="text-xs text-gray-400">Accuracy</p>
        </GlassCard>
      </div>

      <div className="grid gap-4">
        {aptitudeTopics.map((topic, idx) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <GlassCard>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{topic.name}</h3>
                    <Badge color={proficiencyColors[topic.proficiency]}>{topic.proficiency}</Badge>
                  </div>
                  <ProgressBar value={topic.progress} max={100} color={topic.progress >= 80 ? "green" : topic.progress >= 50 ? "primary" : "yellow"} />
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-white">{topic.correctAnswers}/{topic.totalQuestions}</p>
                    <p className="text-xs text-gray-400">Correct</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 dark:text-white">{topic.progress}%</p>
                    <p className="text-xs text-gray-400">Progress</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
