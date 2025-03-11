import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  DocumentIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

function Sidebar({ isProfessor }) {
  return (
    <div className="w-64 bg-gray-200 dark:bg-gray-800 h-screen py-8 px-3">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Exam Platform
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to={isProfessor ? '/professor' : '/student'}
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`
              }
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          {isProfessor ? (
            <>
              <li>
                <NavLink
                  to="/create-exam"
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  <span>Creer Examen</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listeExamen"
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2" />
                  <span>Liste des Examens</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                  <span>Statistiques</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/student-exams"
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  <span>Available Exams</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/previous-exams"
                  className={({ isActive }) =>
                    `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <DocumentIcon className="h-5 w-5 mr-2" />
                  <span>Previous Exams</span>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`
              }
            >
              <BellIcon className="h-5 w-5 mr-2" />
              <span>Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`
              }
            >
              <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
              <span>Forum</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
