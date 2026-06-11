import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Code2, Brain, FileText, Calendar, Sparkles, Star, Shield, Zap } from "lucide-react";

const fadeUp = { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.6 } } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const features = [
  { icon: Code2, title: "Coding Tracker", desc: "Track 200+ problems across platforms with difficulty levels" },
  { icon: Brain, title: "Aptitude Analytics", desc: "Master quantitative, logical & verbal skills" },
  { icon: FileText, title: "AI Resume Review", desc: "Get AI-powered resume scoring & suggestions" },
  { icon: Calendar, title: "Interview Scheduler", desc: "Schedule & track mock interviews" },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "95%", label: "Success Rate" },
  { value: "500+", label: "Companies" },
  { value: "4.9", label: "Avg Rating" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">CareerAI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Sign In</Link>
          <Link to="/login" className="px-5 py-2 text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-colors shadow-lg shadow-primary-500/25">Get Started</Link>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> AI-Powered Career Preparation
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Master Your{" "}
            <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Placement</span>{" "}
            Journey
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Track coding problems, aptitude topics, resumes, and mock interviews - all powered by AI to get you placement-ready.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
            <Link to="/login" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40">
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all">
              Watch Demo <Zap className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center p-6 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything you need to crack placements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp} className="group p-6 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>© 2024 CareerAI. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
