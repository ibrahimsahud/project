import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ShoppingCart, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { NAV_ITEMS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { itemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.img 
            src="/images/logo.png" 
            alt="OKTANT LANG Logo" 
            className="h-12 w-auto cursor-pointer" 
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            onClick={() => navigate('/')}
          />
          <span 
            className="text-xl font-bold text-red-600 dark:text-red-500 font-playfair cursor-pointer"
            onClick={() => navigate('/')}
          >
            OKTANT LANG
          </span>
        </Link>

        <div className="flex items-center space-x-4">

                         {/* هنا ظهور سلة الدفع */}
          {/*
            <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          */}


          <button 
            onClick={toggleTheme}
            className="p-1 rounded-full focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </button>

          <div className="relative">
            
            <button
              className="p-1 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="py-1">
                    {NAV_ITEMS.map((item) => (
                      <div key={item.id} className="relative group">
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          {item.label}
                        </button>
                        {item.submenu && (
                          <div className="absolute left-full top-0 w-56 mt-0 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="py-1">
                              {item.submenu.map((subitem) => (
                                <button
                                  key={subitem.id}
                                  onClick={() => handleNavigation(subitem.path)}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                >
                                  {subitem.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header