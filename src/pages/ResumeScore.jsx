import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, TrendingUp, CheckCircle2, AlertCircle, Lightbulb, RefreshCw, ArrowUp } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";
import { resumeData } from "../data/dummyData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ResumeScore() {
  const [activeTab, setActiveTab] = useState("overview");
  const sections = Object.entries(resumeData.sections);

  const scoreColor = resumeData.aiScore >= 80 ? "green" : resumeData.aiScore >= 60 ? "yellow" : "red";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Score Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered resume analysis & suggestions</p>
        </div>
        <Button variant="secondary">
          <RefreshCw className="w-4 h-4" /> Re-analyze
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-1 text-center">
          <div className="relative inline-flex items-center justify-center mb-4">
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-gray-700" />
              <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray={`${(resumeData.aiScore / 100) * 339.292} 339.292`} className="text-primary-500" strokeLinecap="round" />
            </svg>
            <span className="absolute text-3xl font-bold text-gray-900 dark:text-white">{resumeData.aiScore}</span>
          </div>
          <Badge color={scoreColor}>{resumeData.aiScore >= 80 ? "Great" : resumeData.aiScore >= 60 ? "Good" : "Needs Work"}</Badge>
          <p className="text-xs text-gray-400 mt-2">Last updated: {resumeData.lastUpdated}</p>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Section-wise Scores</h3>
          <div className="space-y-4">
            {sections.map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{key}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{value.score}/100</span>
                </div>
                <ProgressBar value={value.score} max={100} color={value.score >= 80 ? "green" : value.score >= 60 ? "primary" : "yellow"} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">AI Improvement Suggestions</h3>
          <div className="space-y-3">
            {resumeData.improvements.map((imp, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{imp}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Score History</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={resumeData.reviewHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(156,163,175,0.2)" />
              <XAxis dataKey="date" tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {resumeData.reviewHistory.map((review, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/10 dark:bg-gray-800/10">
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">{review.date}</p>
                  <p className="text-xs text-gray-400">{review.summary}</p>
                </div>
                <span className="text-sm font-bold text-primary-500">{review.score}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-primary-500" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{resumeData.fileName}</h3>
            <p className="text-xs text-gray-400">Uploaded resume</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm"><ArrowUp className="w-4 h-4" /> Upload New</Button>
          <Button variant="secondary" size="sm"><FileText className="w-4 h-4" /> Download</Button>
          <Button variant="secondary" size="sm"><RefreshCw className="w-4 h-4" /> Re-analyze</Button>
        </div>
      </GlassCard>
    </motion.div>
  );
}
