import React from 'react';
import Sidebar from '../components/Sidebar';

function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isProfessor={false} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Student Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Available Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              View and take available exams.
            </p>
            <a
              href="/student-exams"
              className="btn-primary mt-4 inline-block"
            >
              View Exams
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              My Results
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Check your exam results and feedback.
            </p>
            <a
              href="/results/123" // Replace with actual exam ID
              className="btn-primary mt-4 inline-block"
            >
              View Results
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Previous Exams
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access previous exam papers for practice.
            </p>
            <a
              href="/previous-exams"
              className="btn-primary mt-4 inline-block"
            >
              View Previous Exams
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
