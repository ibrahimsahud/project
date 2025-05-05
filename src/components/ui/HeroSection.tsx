import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BookOpen, PenTool, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" 
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Learn Any Language with 
              <span className="text-red-600 dark:text-red-500"> OKTANT LANG</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Unlock your potential with our innovative language learning methods. 
              Personalized courses, expert teachers, and interactive lessons.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                to="/programs" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <span>Explore Courses</span>
                <BookOpen size={18} className="ml-2" />
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <span>Contact Us</span>
                <PenTool size={18} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-96">
              {/* 3D Education objects animation */}
              <motion.div 
                className="absolute top-10 left-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <BookOpen size={48} className="text-red-600" />
              </motion.div>
              
              <motion.div 
                className="absolute top-40 right-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1 
                }}
              >
                <PenTool size={48} className="text-blue-600" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-6 rounded-full shadow-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360] 
                }}
                transition={{ 
                  scale: {
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  },
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <Globe size={64} className="text-green-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-gray-700 dark:border-gray-300 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full"
            animate={{ y: [0, 13, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;