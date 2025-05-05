import React from 'react';
import { motion } from 'framer-motion';
import LanguageCard from './LanguageCard';
import { LANGUAGES } from '../../utils/constants';

const LanguagesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-red-600 dark:text-red-500">Languages</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose from our selection of seven languages taught by expert native speakers.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {LANGUAGES.map((language, index) => (
            <LanguageCard 
              key={language.id} 
              language={language} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;