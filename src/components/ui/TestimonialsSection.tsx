import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS } from '../../utils/constants';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

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
            Student <span className="text-red-600 dark:text-red-500">Testimonials</span>
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
            Hear what our students have to say about their learning experience with us.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} index={0} />
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? 'bg-red-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow-lg focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;