{/* هون صفحة الدفع ولسنا بحاجة لها*/}




import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, CreditCard, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeItem, clearCart } = useCart();
  
  useEffect(() => {
    document.title = 'Your Cart - OKTANT LANG';
  }, []);

  const totalPrice = items.reduce((sum, item) => sum + item.courseLevel.price, 0);

  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Cart</h1>
              {items.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear Cart
                </button>
              )}
            </div>
            
            {items.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4 inline-block"
                >
                  🛒
                </motion.div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Your cart is empty
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Looks like you haven't added any courses yet.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 flex flex-col sm:flex-row sm:items-center justify-between"
                      >
                        <div className="mb-4 sm:mb-0">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{item.courseLevel.emoji}</span>
                            <div>
                              <h3 className="font-semibold text-gray-800 dark:text-white">
                                {item.languageName}: {item.courseLevel.title}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.courseLevel.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:w-auto w-full">
                          <span className="font-bold text-gray-800 dark:text-white">
                            ${item.courseLevel.price}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 ml-6"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex justify-between mb-6">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-800 dark:text-white">${totalPrice}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Total</span>
                      <span className="text-xl font-bold text-gray-800 dark:text-white">${totalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Including all taxes and fees
                    </p>
                    
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed to Checkout
                    </button>
                  </div>
                  
                  <Link
                    to="/"
                    className="inline-flex items-center text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
    
  );
};

export default CartPage;
