import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';

const schedules = [
  {
    id: 1,
    language: 'English',
    level: 'Beginner',
    time: '09:00 - 10:30',
    days: 'Monday & Wednesday',
    instructor: 'Sarah Johnson',
    capacity: '8 students'
  },
  {
    id: 2,
    language: 'Spanish',
    level: 'Intermediate',
    time: '11:00 - 12:30',
    days: 'Tuesday & Thursday',
    instructor: 'Carlos Rodriguez',
    capacity: '8 students'
  },
  {
    id: 3,
    language: 'French',
    level: 'Advanced',
    time: '14:00 - 15:30',
    days: 'Monday & Wednesday',
    instructor: 'Marie Dubois',
    capacity: '8 students'
  },
  {
    id: 4,
    language: 'German',
    level: 'Beginner',
    time: '16:00 - 17:30',
    days: 'Tuesday & Thursday',
    instructor: 'Hans Mueller',
    capacity: '8 students'
  },
  {
    id: 5,
    language: 'Italian',
    level: 'Intermediate',
    time: '18:00 - 19:30',
    days: 'Wednesday & Friday',
    instructor: 'Marco Rossi',
    capacity: '8 students'
  },
  {
    id: 6,
    language: 'Arabic',
    level: 'Beginner',
    time: '10:00 - 11:30',
    days: 'Saturday & Sunday',
    instructor: 'Ahmed Hassan',
    capacity: '8 students'
  },
  {
    id: 7,
    language: 'Turkish',
    level: 'Intermediate',
    time: '13:00 - 14:30',
    days: 'Saturday & Sunday',
    instructor: 'Mehmet Yilmaz',
    capacity: '8 students'
  }
];

const CourseSchedule: React.FC = () => {
  useEffect(() => {
    document.title = 'Course Schedule - OKTANT LANG';
  }, []);

  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Course <span className="text-red-600 dark:text-red-500">Schedule</span>
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-red-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Find the perfect time slot for your language learning journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schedules.map((schedule, index) => (
              <motion.div
                key={schedule.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {schedule.language}
                  </h2>
                  <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm">
                    {schedule.level}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-5 w-5 mr-2 text-red-600" />
                    <span>{schedule.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-red-600" />
                    <span>{schedule.days}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="h-5 w-5 mr-2 text-red-600" />
                    <span>{schedule.instructor}</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                    <span>{schedule.capacity}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Schedule Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  All times are in local time (GMT+3)
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Classes are 90 minutes long with a short break
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Maximum class size is 8 students to ensure quality instruction
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Private lessons are available upon request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseSchedule;