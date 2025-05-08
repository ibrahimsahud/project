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

    const img = document.querySelector('.hero-image') as HTMLElement;
    if (img) {
      setTimeout(() => {
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
      }, 800);
    }
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" 
        }}></div>
      </div>

      {/* صورةالصفحة الرئيسية مع التلاشي */}
      <img
  src="/images/homeimg.png"
  alt="Education"
  className="hero-image absolute top-0 right-52 w-[56vw] md:w-[50vw] lg:w-[45vw] max-w-[800px] h-auto rounded-xl transition-all duration-1000 opacity-0 z-10 shadow-none"
  style={{ 
    animation: 'fade-in-up 3s ease-out 1s forwards',
    objectFit: 'contain'
  }}
/>



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
            <div className="relative w-full h-96"></div>
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
