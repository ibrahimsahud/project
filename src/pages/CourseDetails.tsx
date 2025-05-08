import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, BookOpen, Clock, Award, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { LANGUAGES, COURSE_LEVELS } from '../utils/constants';
import { useCart } from '../context/CartContext';

const CourseDetails: React.FC = () => {
  const { languageId, courseId } = useParams<{ languageId: string; courseId: string }>();
  const [added, setAdded] = useState(false);
  const { addItem, items } = useCart();
  
  const language = LANGUAGES.find(lang => lang.id === languageId);
  const course = COURSE_LEVELS.find(course => course.id === Number(courseId));
  
  useEffect(() => {
    if (language && course) {
      document.title = `${course.title} - ${language.name} | OKTANT LANG`;
    }
  }, [language, course]);

  useEffect(() => {
    if (language && course) {
      const isInCart = items.some(item => 
        item.languageId === languageId && 
        item.courseLevel.id === Number(courseId)
      );
      setAdded(isInCart);
    }
  }, [items, languageId, courseId, language, course]);

  const handleAddToCart = () => {
    if (language && course) {
      addItem({
        id: `${languageId}-${courseId}`,
        languageId: languageId,
        languageName: language.name,
        courseLevel: course
      });
      setAdded(true);
    }
  };

  if (!language || !course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Course not found
            </h2>
            <Link to="/" className="text-red-600 hover:underline">
              Return to home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="md:w-1/2 bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-6xl"
                >
                  {course.emoji}
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  {language.name}: {course.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg mb-8 text-red-100"
                >
                  {course.description}
                </motion.p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-red-300" />
                    <span>Duration: 8 weeks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-red-300" />
                    <span>24 interactive lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-red-300" />
                    <span>Certificate upon completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-red-300" />
                    <span>Small groups (max 8 students)</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Course Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our {course.title} in {language.name} is designed to {course.id === 1 ? 'introduce beginners' : 'help students advance'} to the language through engaging, interactive lessons.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Each session combines speaking, listening, reading, and writing practice, ensuring a comprehensive language learning experience.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{course.id <= 2 ? 'Essential vocabulary for everyday situations' : 'Advanced vocabulary for professional contexts'}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{course.id <= 2 ? 'Basic grammar structures' : 'Complex grammar and idioms'}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{course.id <= 3 ? 'Conversational skills for social interactions' : 'Nuanced expression and debate skills'}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Cultural insights and practical application</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Price</span>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white"> 100 ${course.price}</div>
                    </div>
                    <a
                        href="https://www.instagram.com/i5boo" // هون مكان رابط الدفع واكمال التسجيل
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                        >
                        <ShoppingCart className="h-5 w-5" />
                        <span>تابعنا على إنستغرام</span>
                    </a>

                  </div>
                  
                  <div className="text-center">
                    <Link
                      to={`/language/${languageId}`}
                      className="text-red-600 dark:text-red-400 hover:underline text-sm"
                    >
                      Back to all {language.name} courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetails;