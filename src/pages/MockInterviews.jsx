import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Building2, MapPin, Star, ChevronLeft, ChevronRight, Plus, Video, Phone, MessageSquare } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { mockInterviews } from "../data/dummyData";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const statusColors = { Scheduled: "blue", Completed: "green", Cancelled: "red" };
const typeIcons = { Technical: Video, HR: MessageSquare, Managerial: Phone, Coding: MessageSquare };

export default function MockInterviews() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const days = daysInMonth(currentMonth, currentYear);
  const firstDay = firstDayOfMonth(currentMonth, currentYear);

  const prevMonth = () => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } else { setCurrentMonth(currentMonth - 1); } };
  const nextMonth = () => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } else { setCurrentMonth(currentMonth + 1); } };

  const interviewsForDate = selectedDate
    ? mockInterviews.filter((i) => i.date === selectedDate)
    : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mock Interviews</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Schedule and track your interview preparation</p>
        </div>
        <Button>
          <Plus className="w-4 h-4" /> Schedule Interview
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{mockInterviews.filter(i => i.status === "Scheduled").length}</p>
          <Badge color="blue">Scheduled</Badge>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{mockInterviews.filter(i => i.status === "Completed").length}</p>
          <Badge color="green">Completed</Badge>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{mockInterviews.length}</p>
          <Badge color="purple">Total</Badge>
        </GlassCard>
        <GlassCard className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(mockInterviews.filter(i => i.status === "Completed").reduce((s, i) => s + i.rating, 0) / mockInterviews.filter(i => i.status === "Completed").length * 10) / 10 || "-"}
          </p>
          <Badge color="amber">Avg Rating</Badge>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 text-gray-500 dark:text-gray-400"><ChevronLeft className="w-5 h-5" /></button>
            <h3 className="font-semibold text-gray-900 dark:text-white">{months[currentMonth]} {currentYear}</h3>
            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 text-gray-500 dark:text-gray-400"><ChevronRight className="w-5 h-5" /></button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d} className="text-center text-xs text-gray-400 py-1">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: days }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const hasInterview = mockInterviews.some((inv) => inv.date === dateStr);
              const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
              const isSelected = dateStr === selectedDate;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`relative p-2 text-sm rounded-lg transition-all ${
                    isSelected
                      ? "bg-primary-500 text-white"
                      : isToday
                        ? "bg-primary-500/10 text-primary-600 dark:text-primary-400 font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/30"
                  }`}
                >
                  {day}
                  {hasInterview && !isSelected && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
                  )}
                </button>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            {selectedDate ? `Interviews on ${selectedDate}` : "Upcoming Interviews"}
          </h3>

          <div className="space-y-3">
            {(selectedDate ? interviewsForDate : mockInterviews.filter((i) => i.status === "Scheduled")).map((interview, idx) => {
              const TypeIcon = typeIcons[interview.type] || Video;
              return (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-gray-100 dark:border-gray-700/30"
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 text-primary-600 dark:text-primary-400">
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{interview.company}</h4>
                      <Badge color={statusColors[interview.status]}>{interview.status}</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {interview.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {interview.time}</span>
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {interview.type}</span>
                    </div>
                    {interview.feedback && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-gray-400">{interview.feedback}</span>
                        {interview.rating && (
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: interview.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {interview.notes && (
                      <p className="mt-1 text-xs text-gray-400 italic">Note: {interview.notes}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
            {(selectedDate && interviewsForDate.length === 0) && (
              <p className="text-sm text-gray-400 text-center py-8">No interviews scheduled on this date</p>
            )}
            {!selectedDate && mockInterviews.filter((i) => i.status === "Scheduled").length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">No upcoming interviews</p>
            )}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">All Interviews</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700/50">
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Company</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden sm:table-cell">Type</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Date</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden md:table-cell">Status</th>
                <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium hidden lg:table-cell">Rating</th>
              </tr>
            </thead>
            <tbody>
              {mockInterviews.map((interview, idx) => (
                <motion.tr
                  key={interview.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors"
                >
                  <td className="py-3 px-2 font-medium text-gray-900 dark:text-white">{interview.company}</td>
                  <td className="py-3 px-2 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{interview.type}</td>
                  <td className="py-3 px-2 text-gray-500 dark:text-gray-400">{interview.date}</td>
                  <td className="py-3 px-2 hidden md:table-cell"><Badge color={statusColors[interview.status]}>{interview.status}</Badge></td>
                  <td className="py-3 px-2 hidden lg:table-cell">
                    {interview.rating ? (
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < interview.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"}`} />
                        ))}
                      </div>
                    ) : "-"}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </motion.div>
  );
}
