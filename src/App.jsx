import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CodingProgress from "./pages/CodingProgress";
import AptitudeTracker from "./pages/AptitudeTracker";
import ResumeScore from "./pages/ResumeScore";
import MockInterviews from "./pages/MockInterviews";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/coding" element={<CodingProgress />} />
              <Route path="/aptitude" element={<AptitudeTracker />} />
              <Route path="/resume" element={<ResumeScore />} />
              <Route path="/interviews" element={<MockInterviews />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
