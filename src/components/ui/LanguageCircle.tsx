import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Language } from '../../types';

interface LanguageCircleProps {
  language: Language;
  index: number;
  total: number;
}

const LanguageCircle: React.FC<LanguageCircleProps> = ({ language, index, total }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{ 
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Link to={`/language/${language.id}`}>
        <motion.div
          className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.2, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl">{language.emoji}</span>
            <motion.div
              className="absolute inset-0 bg-red-600 flex items-center justify-center rounded-full opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-xl">{language.flagCode}</span>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default LanguageCircle;