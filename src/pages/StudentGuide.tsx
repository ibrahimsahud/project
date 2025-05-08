import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Book, Video, Users, MessageCircle, Calendar, Headphones } from 'lucide-react';

const StudentGuide: React.FC = () => {
  useEffect(() => {
    document.title = 'Student Guide - OKTANT LANG';
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
              Student <span className="text-red-600 dark:text-red-500">Guide</span>
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
              Everything you need to know about your language learning journey with OKTANT LANG
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Book className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Course Materials
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Digital textbooks and workbooks</li>
                <li>• Interactive exercises</li>
                <li>• Downloadable resources</li>
                <li>• Study guides</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Video className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Online Classes
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Live video sessions</li>
                <li>• Recording availability</li>
                <li>• Interactive whiteboard</li>
                <li>• Screen sharing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Study Groups
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Peer learning</li>
                <li>• Group discussions</li>
                <li>• Practice sessions</li>
                <li>• Cultural exchange</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <MessageCircle className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Communication
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Chat with teachers</li>
                <li>• Discussion forums</li>
                <li>• Support tickets</li>
                <li>• Feedback system</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Calendar className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Schedule
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Class calendar</li>
                <li>• Homework deadlines</li>
                <li>• Exam dates</li>
                <li>• Events</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Headphones className="h-10 w-10 text-red-600 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Support
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Technical help</li>
                <li>• Academic support</li>
                <li>• FAQ section</li>
                <li>• Contact information</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tips for Success
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 mr-2">1.</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Set aside regular study time each day
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">2.</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Participate actively in class discussions
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">3.</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete all assignments on time
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">4.</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Practice speaking with classmates
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">5.</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Use all available resources
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentGuide;