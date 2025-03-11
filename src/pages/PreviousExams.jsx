import React from 'react';

function PreviousExams() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Previous Exams
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          List of previous exams for students to practice.
        </p>
        {/* Display list of previous exams here */}
      </div>
    </div>
  );
}

export default PreviousExams;
