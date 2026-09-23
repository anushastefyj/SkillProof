import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import MySkills from './pages/MySkills';
import SkillDetail from './pages/SkillDetail';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AddEvidence from './pages/AddEvidence';
import EvidenceTimeline from './pages/EvidenceTimeline';
import GithubActivity from './pages/GithubActivity';
import Quizzes from './pages/Quizzes';
import CodingTasks from './pages/CodingTasks';
import EnhanceProfile from './pages/EnhanceProfile';

import RecruiterLayout from './layouts/RecruiterLayout';
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard';
import BrowseStudents from './pages/recruiter/BrowseStudents';
import CandidateProfile from './pages/recruiter/CandidateProfile';
import SavedCandidates from './pages/recruiter/SavedCandidates';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Student Routes */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="skills" element={<MySkills />} />
            <Route path="skills/:skillId" element={<SkillDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="enhance-profile" element={<EnhanceProfile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="add-evidence" element={<AddEvidence />} />
            <Route path="evidence" element={<EvidenceTimeline />} />
            <Route path="github" element={<GithubActivity />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="coding-tasks" element={<CodingTasks />} />
          </Route>
          
          {/* Protected Recruiter Routes */}
          <Route path="/recruiter" element={<RecruiterLayout />}>
            <Route index element={<RecruiterDashboard />} />
            <Route path="browse" element={<BrowseStudents />} />
            <Route path="candidate/:id" element={<CandidateProfile />} />
            <Route path="saved" element={<SavedCandidates />} />
            <Route path="settings" element={<div>Recruiter Settings</div>} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
