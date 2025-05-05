import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Users, Star, Headphones, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Expert Teachers',
    description: 'Learn from certified language instructors with years of teaching experience.',
    icon: <Users className="h-10 w-10 text-red-600" />
  },
  {
    id: 2,
    title: 'Interactive Lessons',
    description: 'Engage with interactive content designed to make learning fun and effective.',
    icon: <Video className="h-10 w-10 text-red-600" />
  },
  {
    id: 3,
    title: 'Comprehensive Resources',
    description: 'Access a wide range of materials including textbooks, audio resources, and exercises.',
    icon: <BookOpen className="h-10 w-10 text-red-600" />
  },
  {
    id: 4,
    title: 'Proven Results',
    description: 'Our teaching methods have helped thousands of students achieve fluency.',
    icon: <Star className="h-10 w-10 text-red-600" />
  },
  {
    id: 5,
    title: 'Audio Learning',
    description: 'Improve your pronunciation with our specialized audio content.',
    icon: <Headphones className="h-10 w-10 text-red-600" />
  },
  {
    id: 6,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with our flexible course schedules.',
    icon: <Clock className="h-10 w-10 text-red-600" />
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Makes Us <span className="text-red-600 dark:text-red-500">Special</span>
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
            Our unique approach to language learning combines traditional methods with cutting-edge technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;