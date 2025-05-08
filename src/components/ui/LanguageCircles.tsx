import React from 'react';
import { motion } from 'framer-motion';
import LanguageCircle from './LanguageCircle';
import { LANGUAGES } from '../../utils/constants';
import { Globe } from 'lucide-react';

const LanguageCircles: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center globe icon */}
      <motion.div 
        className="absolute z-10 w-24 h-24 bg-red-600 dark:bg-red-500 rounded-full flex items-center justify-center shadow-xl"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <Globe className="w-12 h-12 text-white" />
      </motion.div>

      {/* Language circles */}
      {LANGUAGES.map((language, index) => (
        <LanguageCircle 
          key={language.id} 
          language={language} 
          index={index} 
          total={LANGUAGES.length} 
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        {LANGUAGES.map((_, index) => {
          const startAngle = (index / LANGUAGES.length) * Math.PI * 2;
          const endAngle = ((index + 1) / LANGUAGES.length) * Math.PI * 2;
          const radius = 150;
          
          const startX = Math.cos(startAngle) * radius + 2000;
          const startY = Math.sin(startAngle) * radius + 200;
          const endX = Math.cos(endAngle) * radius + 200;
          const endY = Math.sin(endAngle) * radius + 200;
          
          const midX = (startX + endX) / 2 + Math.sin((startAngle + endAngle) / 2) * 20;
          const midY = (startY + endY) / 2 - Math.cos((startAngle + endAngle) / 2) * 20;
          
          return (
            <motion.path
              key={index}
              d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default LanguageCircles