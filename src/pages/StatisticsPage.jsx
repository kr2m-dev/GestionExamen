import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Sidebar from '../components/Sidebar';

const data = [
  { name: 'Exam 1', Average: 78, Students: 30 },
  { name: 'Exam 2', Average: 85, Students: 35 },
  { name: 'Exam 3', Average: 92, Students: 40 },
  { name: 'Exam 4', Average: 68, Students: 25 },
  { name: 'Exam 5', Average: 88, Students: 32 },
];

function StatisticsPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isProfessor={true} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Statistics &amp; Reports
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Average" fill="#8884d8" />
            <Bar dataKey="Students" fill="#82ca9d" />
          </BarChart>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Interactive graphs displaying average scores and student distribution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsPage;
