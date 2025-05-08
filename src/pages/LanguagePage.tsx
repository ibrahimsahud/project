import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CourseCard from '../components/ui/CourseCard';
import { LANGUAGES, COURSE_LEVELS } from '../utils/constants';

const LanguagePage: React.FC = () => {
  const { languageId } = useParams<{ languageId: string }>();
  
  const language = LANGUAGES.find(lang => lang.id === languageId);
  
  // Update page title
  useEffect(() => {
    if (language) {
      document.title = `${language.name} Courses - OKTANT LANG`;
    }
  }, [language]);

  if (!language) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Language not found
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
      <section className="pt-28 pb-20 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-4 inline-block"
            >
              {language.emoji}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language.name} <span className="text-red-600 dark:text-red-500">Courses</span>
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-red-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {language.id === 'en' && "English is the global language of business, travel, and international communication. Learning English opens doors to countless opportunities worldwide."}
              {language.id === 'es' && "Spanish is spoken by over 500 million people worldwide. It's the official language in 21 countries and a key language for international business and travel."}
              {language.id === 'fr' && "French is not only the language of romance but also an official language in 29 countries. It's widely used in diplomacy, international relations, and the arts."}
              {language.id === 'de' && "German is the most widely spoken language in the European Union. It's the language of innovation, philosophy, and engineering excellence."}
              {language.id === 'it' && "Italian is the language of art, music, fashion, and exceptional cuisine. Learning Italian connects you to a rich cultural heritage."}
              {language.id === 'ar' && "Arabic is spoken by over 420 million people worldwide. It's the liturgical language of Islam and key for business in the Middle East."}
              {language.id === 'tr' && "Turkish connects Europe and Asia, with over 80 million speakers worldwide. It's a language with rich history and growing importance in international business."}
            </motion.p>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {COURSE_LEVELS.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                languageId={language.id} 
                index={index} 
              />
            ))}
          </div>
          
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Why Learn {language.name} with OKTANT LANG?
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Experienced native {language.name} instructors</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Interactive lesson materials designed for all learning styles</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Cultural insights that go beyond language</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Flexible scheduling to fit your lifestyle</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Real-world conversation practice</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Choose a course level above or contact us for a personalized learning plan.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LanguagePage;