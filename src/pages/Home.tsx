import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import LanguageCircles from '../components/ui/LanguageCircles';
import FeaturesSection from '../components/ui/FeaturesSection';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import StatsSection from '../components/ui/StatsSection';
import LanguagesSection from '../components/ui/LanguagesSection';
import ContactForm from '../components/ui/ContactForm';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'OKTANT LANG - Learn Any Language';
  }, []);

  return (
    <Layout>
      <HeroSection />
      
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Choose Your <span className="text-red-600 dark:text-red-500">Language</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our wide range of language courses designed to help you achieve fluency.
            </p>
          </div>
          
          <LanguageCircles />
        </div>
      </section>
      
      <FeaturesSection />
      <StatsSection />
      <LanguagesSection />
      <TestimonialsSection />
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Contact <span className="text-red-600 dark:text-red-500">Us</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? Get in touch with us and we'll help you find the perfect language course.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;