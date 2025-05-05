import React from 'react';
import { motion } from 'framer-motion';
import { Statistic } from '../../types';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

interface StatCardProps {
  stat: Statistic;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const renderIcon = () => {
    switch (stat.icon) {
      case 'Users': return <Users className="h-10 w-10 text-red-600 dark:text-red-400" />;
      case 'BookOpen': return <BookOpen className="h-10 w-10 text-red-600 dark:text-red-400" />;
      case 'Award': return <Award className="h-10 w-10 text-red-600 dark:text-red-400" />;
      case 'Globe': return <Globe className="h-10 w-10 text-red-600 dark:text-red-400" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
    >
      <div className="flex justify-center mb-4">
        {renderIcon()}
      </div>
      <motion.h3 
        className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {stat.value}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
    </motion.div>
  );
};

export default StatCard;