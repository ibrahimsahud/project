{/* هذا الكود المسؤل عن صفحة اختيار المستوى ARABIC COURSES */}




import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CourseLevel } from '../../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: CourseLevel;
  languageId: string;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, languageId, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{course.title}</h3>
          <span className="text-3xl">{course.emoji}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600 dark:text-red-400">{course.price}</span>
          
          <Link 
            to={`/language/${languageId}/course/${course.id}`}
            className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Explore course</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;