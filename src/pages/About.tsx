import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Book, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - OKTANT LANG';
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
              About <span className="text-red-600 dark:text-red-500">OKTANT LANG</span>
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
              Empowering global communication through innovative language education
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                At OKTANT LANG, we believe that language learning should be accessible, 
                engaging, and effective. Our mission is to break down language barriers 
                and connect people across cultures through innovative teaching methods 
                and personalized learning experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <Users className="h-8 w-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Expert Teachers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Native speakers with teaching expertise</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <Book className="h-8 w-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Quality Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Carefully crafted learning materials</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We envision a world where language is not a barrier but a bridge. 
                Through our comprehensive language programs, we aim to create global 
                citizens who can confidently communicate across cultures and borders.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <Globe className="h-8 w-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Global Reach</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Students from around the world</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <Award className="h-8 w-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-white">Recognition</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Internationally accredited programs</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Committed to delivering the highest quality education
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building connections across cultures
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Embracing new teaching methods and technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;