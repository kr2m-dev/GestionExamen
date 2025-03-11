import React from 'react';
import { useParams } from 'react-router-dom';

function ExamPage() {
  const { examId } = useParams();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Exam: {examId}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          This is the exam page for exam ID: {examId}.
        </p>
        {/* Add exam questions and interactive elements here */}
      </div>
    </div>
  );
}

export default ExamPage;
