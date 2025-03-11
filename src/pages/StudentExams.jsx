import React from 'react';

function StudentExams() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Available Exams
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          List of available exams for students to take.
        </p>
        {/* Display list of available exams here */}
      </div>
    </div>
  );
}

export default StudentExams;
