import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import ProfessorDashboard from './pages/ProfessorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import CreateExam from './pages/CreateExam';
import ExamPage from './pages/ExamPage';
import CorrectionPage from './pages/CorrectionPage';
import ResultsPage from './pages/ResultsPage';
import StatisticsPage from './pages/StatisticsPage';
import Forum from './pages/Forum';
import Notifications from './pages/Notifications';
import PreviousExams from './pages/PreviousExams';
import StudentExams from './pages/StudentExams';
import { AuthProvider } from './context/AuthContext';
import ExamList from './pages/exam-list';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/professor" element={<ProfessorDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/exam/:examId" element={<ExamPage />} />
          <Route path="/correction/:submissionId" element={<CorrectionPage />} />
          <Route path="/results/:examId" element={<ResultsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/previous-exams" element={<PreviousExams />} />
          <Route path="/student-exams" element={<StudentExams />} />
          <Route path="/listeExamen" element={<ExamList />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
