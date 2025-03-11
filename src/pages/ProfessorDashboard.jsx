import React from 'react';
import Sidebar from '../components/Sidebar';

function ProfessorDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isProfessor={true} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Professor Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Create Exam
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quickly create and publish new exams.
            </p>
            <a
              href="/create-exam"
              className="btn-primary mt-4 inline-block"
            >
              Create Exam
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Pending Corrections
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              View and grade submitted exams.
            </p>
            <a
              href="/correction"
              className="btn-primary mt-4 inline-block"
            >
              View Corrections
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Student Statistics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Analyze student performance and exam results.
            </p>
            <a
              href="/statistics"
              className="btn-primary mt-4 inline-block"
            >
              View Statistics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessorDashboard;
