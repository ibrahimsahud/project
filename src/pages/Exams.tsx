import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { FileText, Clock, Award, CheckCircle } from 'lucide-react';

const exams = [
  {
    id: 1,
    title: 'Placement Test',
    description: 'Determine your current language level',
    duration: '45 minutes',
    icon: <FileText className="h-8 w-8 text-red-600" />
  },
  {
    id: 2,
    title: 'Progress Assessment',
    description: 'Track your learning progress',
    duration: '60 minutes',
    icon: <Clock className="h-8 w-8 text-red-600" />
  },
  {
    id: 3,
    title: 'Level Certification',
    description: 'Get certified for your language level',
    duration: '90 minutes',
    icon: <Award className="h-8 w-8 text-red-600" />
  },
  {
    id: 4,
    title: 'Final Evaluation',
    description: 'Complete course assessment',
    duration: '120 minutes',
    icon: <CheckCircle className="h-8 w-8 text-red-600" />
  }
];

const Exams: React.FC = () => {
  useEffect(() => {
    document.title = 'Exams - OKTANT LANG';
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
              Language <span className="text-red-600 dark:text-red-500">Exams</span>
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
              Assess your language skills through our comprehensive examination system
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {exams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {exam.icon}
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white ml-3">
                    {exam.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exam.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  Duration: {exam.duration}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Exam Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  All exams are conducted online through our secure testing platform
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Results are available within 48 hours of completion
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Certificates are issued digitally and can be downloaded immediately
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <p className="text-gray-600 dark:text-gray-300">
                  Free retake available if you don't achieve your desired score
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Exams;