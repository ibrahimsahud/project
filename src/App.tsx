import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Book } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Exams from './pages/Exams';
import StudentGuide from './pages/StudentGuide';
import CourseSchedule from './pages/CourseSchedule';
import Contact from './pages/Contact';
import LanguagePage from './pages/LanguagePage';
import CourseDetails from './pages/CourseDetails';
import CartPage from './pages/CartPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CartProvider>
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
                }}
                className="text-red-600 dark:text-red-500"
              >
                <Book size={64} />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute mt-32 text-xl font-bold text-gray-800 dark:text-white"
              >
                OKTANT LANG
              </motion.h2>
            </motion.div>
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/student-guide" element={<StudentGuide />} />
                <Route path="/course-schedule" element={<CourseSchedule />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/language/:languageId" element={<LanguagePage />} />
                <Route path="/language/:languageId/course/:courseId" element={<CourseDetails />} />
                <Route path="/cart" element={<CartPage />} />
                
                {/* Program sub-routes */}
                <Route path="/programs/courses" element={<Programs />} />
                <Route path="/programs/intensive" element={<Programs />} />
                <Route path="/programs/business" element={<Programs />} />
                <Route path="/programs/online" element={<Programs />} />
                <Route path="/programs/kids" element={<Programs />} />
                <Route path="/programs/private" element={<Programs />} />
              </Routes>
            </Router>
          )}
        </AnimatePresence>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;