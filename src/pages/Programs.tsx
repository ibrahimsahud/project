import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { BookOpen, Users, Clock, Award, Video, Globe } from 'lucide-react';

const programs = [
  {
    id: 'courses',
    title: 'Language Courses',
    description: 'Comprehensive language courses for all levels',
    icon: <BookOpen className="h-12 w-12 text-red-600" />,
    path: '/programs/courses'
  },
  {
    id: 'intensive',
    title: 'Intensive Programs',
    description: 'Accelerated learning for quick progress',
    icon: <Clock className="h-12 w-12 text-red-600" />,
    path: '/programs/intensive'
  },
  {
    id: 'business',
    title: 'Business Language',
    description: 'Specialized courses for professional development',
    icon: <Users className="h-12 w-12 text-red-600" />,
    path: '/programs/business'
  },
  {
    id: 'online',
    title: 'Online Courses',
    description: 'Flexible learning from anywhere',
    icon: <Video className="h-12 w-12 text-red-600" />,
    path: '/programs/online'
  },
  {
    id: 'kids',
    title: 'Kids Courses',
    description: 'Fun and engaging lessons for young learners',
    icon: <Globe className="h-12 w-12 text-red-600" />,
    path: '/programs/kids'
  },
  {
    id: 'private',
    title: 'Private Lessons',
    description: 'One-on-one instruction for personalized learning',
    icon: <Award className="h-12 w-12 text-red-600" />,
    path: '/programs/private'
  }
];

const Programs: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Programs - OKTANT LANG';
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
              Our <span className="text-red-600 dark:text-red-500">Programs</span>
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
              Discover our wide range of language learning programs designed to meet your specific needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={program.path} className="block p-6">
                  <div className="flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {program.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;