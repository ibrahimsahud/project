import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative"
    >
      <div className="absolute -top-4 left-6 bg-red-600 dark:bg-red-500 rounded-full p-2">
        <Quote className="h-5 w-5 text-white" />
      </div>
      
      <div className="mb-4 mt-4">
        <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
      </div>
      
      <div className="flex items-center mt-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;