export const userProfile = {
  id: 1,
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  role: "Software Engineer",
  joinDate: "2024-01-15",
  streak: 12,
  totalPoints: 2450,
  level: "Pro",
};

export const dashboardStats = {
  problemsSolved: 142,
  totalProblems: 200,
  aptitudeScore: 78,
  resumeScore: 85,
  interviewsCompleted: 8,
  upcomingInterviews: 2,
  codingStreak: 12,
  weeklyActivity: [
    { day: "Mon", problems: 5, aptitude: 3, goals: 4 },
    { day: "Tue", problems: 3, aptitude: 5, goals: 3 },
    { day: "Wed", problems: 7, aptitude: 2, goals: 5 },
    { day: "Thu", problems: 4, aptitude: 4, goals: 4 },
    { day: "Fri", problems: 6, aptitude: 3, goals: 6 },
    { day: "Sat", problems: 2, aptitude: 6, goals: 2 },
    { day: "Sun", problems: 4, aptitude: 4, goals: 3 },
  ],
  skillDistribution: [
    { name: "Arrays", value: 85 },
    { name: "Strings", value: 70 },
    { name: "Trees", value: 60 },
    { name: "Graphs", value: 45 },
    { name: "DP", value: 55 },
    { name: "Recursion", value: 65 },
  ],
  progressOverTime: [
    { month: "Jan", problems: 20, aptitude: 65 },
    { month: "Feb", problems: 35, aptitude: 68 },
    { month: "Mar", problems: 28, aptitude: 72 },
    { month: "Apr", problems: 45, aptitude: 70 },
    { month: "May", problems: 52, aptitude: 75 },
    { month: "Jun", problems: 42, aptitude: 78 },
  ],
};

export const codingProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays", status: "Completed", platform: "LeetCode", notes: "HashMap solution", dateSolved: "2024-06-01" },
  { id: 2, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", topic: "Strings", status: "Completed", platform: "LeetCode", notes: "Sliding window", dateSolved: "2024-06-03" },
  { id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard", topic: "Arrays", status: "In Progress", platform: "LeetCode", notes: "Binary search approach", dateSolved: "2024-06-05" },
  { id: 4, title: "Binary Tree Level Order Traversal", difficulty: "Medium", topic: "Trees", status: "Completed", platform: "LeetCode", notes: "BFS using queue", dateSolved: "2024-06-07" },
  { id: 5, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Linked List", status: "Not Started", platform: "LeetCode", notes: "", dateSolved: "" },
  { id: 6, title: "Maximum Subarray", difficulty: "Easy", topic: "Arrays", status: "Completed", platform: "LeetCode", notes: "Kadane's algorithm", dateSolved: "2024-06-02" },
  { id: 7, title: "LRU Cache", difficulty: "Medium", topic: "Design", status: "In Progress", platform: "LeetCode", notes: "HashMap + Doubly LinkedList", dateSolved: "2024-06-08" },
  { id: 8, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", topic: "Trees", status: "Not Started", platform: "LeetCode", notes: "", dateSolved: "" },
  { id: 9, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", status: "Completed", platform: "LeetCode", notes: "Stack matching", dateSolved: "2024-05-30" },
  { id: 10, title: "Word Break", difficulty: "Medium", topic: "DP", status: "Completed", platform: "LeetCode", notes: "DP with set", dateSolved: "2024-06-06" },
];

export const aptitudeTopics = [
  { id: 1, name: "Quantitative Aptitude", progress: 75, totalQuestions: 100, correctAnswers: 75, proficiency: "Intermediate" },
  { id: 2, name: "Logical Reasoning", progress: 60, totalQuestions: 80, correctAnswers: 48, proficiency: "Intermediate" },
  { id: 3, name: "Verbal Ability", progress: 90, totalQuestions: 60, correctAnswers: 54, proficiency: "Advanced" },
  { id: 4, name: "Data Interpretation", progress: 45, totalQuestions: 50, correctAnswers: 22, proficiency: "Beginner" },
  { id: 5, name: "Numerical Ability", progress: 80, totalQuestions: 70, correctAnswers: 56, proficiency: "Advanced" },
  { id: 6, name: "Attention to Detail", progress: 55, totalQuestions: 40, correctAnswers: 22, proficiency: "Intermediate" },
];

export const resumeData = {
  id: 1,
  fileName: "Alex_Johnson_Resume.pdf",
  lastUpdated: "2024-06-10",
  aiScore: 85,
  sections: {
    skills: { score: 88, suggestions: ["Add cloud computing skills", "Mention specific frameworks"] },
    experience: { score: 82, suggestions: ["Quantify achievements", "Add more action verbs"] },
    education: { score: 90, suggestions: ["Add GPA if > 3.5"] },
    projects: { score: 85, suggestions: ["Add live demo links", "Mention tech stack clearly"] },
    certifications: { score: 75, suggestions: ["Add more relevant certs", "Include dates"] },
  },
  improvements: [
    "Add a professional summary at the top",
    "Quantify achievements with metrics",
    "Use action verbs (Implemented, Developed, Optimized)",
    "Add relevant keywords for ATS",
    "Keep resume to 1-2 pages",
  ],
  reviewHistory: [
    { date: "2024-06-10", score: 85, summary: "Good improvement in project descriptions" },
    { date: "2024-05-20", score: 72, summary: "Added certifications section" },
    { date: "2024-04-15", score: 65, summary: "Initial review - many improvements needed" },
  ],
};

export const mockInterviews = [
  { id: 1, company: "Google", type: "Technical", date: "2024-06-20", time: "10:00 AM", status: "Scheduled", notes: "Focus on DS&A", preparation: "Medium" },
  { id: 2, company: "Amazon", type: "System Design", date: "2024-06-22", time: "2:00 PM", status: "Scheduled", notes: "Review distributed systems", preparation: "High" },
  { id: 3, company: "Microsoft", type: "HR", date: "2024-06-15", time: "11:00 AM", status: "Completed", feedback: "Great communication skills", rating: 4 },
  { id: 4, company: "Meta", type: "Technical", date: "2024-06-10", time: "1:00 PM", status: "Completed", feedback: "Need to improve problem-solving speed", rating: 3 },
  { id: 5, company: "Apple", type: "Coding", date: "2024-06-25", time: "3:00 PM", status: "Scheduled", notes: "Practice Swift", preparation: "High" },
  { id: 6, company: "Netflix", type: "Managerial", date: "2024-06-08", time: "9:00 AM", status: "Completed", feedback: "Leadership skills are strong", rating: 5 },
  { id: 7, company: "Stripe", type: "Technical", date: "2024-07-01", time: "10:30 AM", status: "Scheduled", notes: "Review payment systems", preparation: "Low" },
  { id: 8, company: "Uber", type: "Coding", date: "2024-06-05", time: "4:00 PM", status: "Completed", feedback: "Good optimization skills", rating: 4 },
];

export const goals = [
  { id: 1, title: "Solve 5 LeetCode problems", type: "Coding", date: "2024-06-11", completed: false },
  { id: 2, title: "Practice aptitude for 1 hour", type: "Aptitude", date: "2024-06-11", completed: false },
  { id: 3, title: "Update resume projects", type: "Resume", date: "2024-06-11", completed: true },
  { id: 4, title: "Review system design concepts", type: "Interview", date: "2024-06-11", completed: false },
  { id: 5, title: "Complete DP practice set", type: "Coding", date: "2024-06-10", completed: true },
  { id: 6, title: "Attend mock interview", type: "Interview", date: "2024-06-10", completed: true },
];

export const achievements = [
  { id: 1, title: "50 Day Streak", description: "Consistent learning for 50 days", icon: "🔥", unlocked: true },
  { id: 2, title: "100 Problems Solved", description: "Solved 100 coding problems", icon: "💻", unlocked: true },
  { id: 3, title: "Aptitude Master", description: "Score 90% in all aptitude topics", icon: "🧮", unlocked: false },
  { id: 4, title: "Resume Pro", description: "Achieve 95+ resume score", icon: "📄", unlocked: false },
  { id: 5, title: "Interview Ready", description: "Complete 10 mock interviews", icon: "🎯", unlocked: true },
  { id: 6, title: "Perfectionist", description: "Score 100% in any topic", icon: "⭐", unlocked: false },
];
