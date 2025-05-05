import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language } from '../../types';

interface LanguageCardProps {
  language: Language;
  index: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-lg group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-8 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{language.emoji}</span>
          <span className="text-xl font-bold">{language.flagCode}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{language.name}</h3>
        
        <p className="mb-6 text-red-100">
          {language.description}
        </p>
        
        <Link 
          to={`/language/${language.id}`}
          className="inline-flex items-center text-white hover:underline"
        >
          <span>Start Learning</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default LanguageCard;