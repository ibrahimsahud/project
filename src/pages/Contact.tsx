import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - OKTANT LANG';
  }, []);

  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-red-600 dark:text-red-500">Us</span>
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-red-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get in touch with us for any questions about our language courses
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      Phone
                    </h3>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kütahya, Turkey
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/dpu.oktant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/oktant-iha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/oktantlang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;