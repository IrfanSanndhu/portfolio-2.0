import React from 'react';
import { motion } from 'framer-motion';
import { Download, Coffee } from 'lucide-react';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
  const { profile, loading } = useData();

  if (loading || !profile) {
    return (
      <section id="home" className="section-padding bg-background-light dark:bg-background-dark">
        <div className="container-width">
          <div className="animate-pulse space-y-6">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Headline & Slogan */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-primary text-text-primary-light dark:text-text-primary-dark"
            >
              {profile.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark"
            >
              {profile.slogan}
            </motion.p>
          </div>

          {/* Current Position */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full font-medium"
          >
            {profile.currentPosition}
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Coffee size={20} />
              Buy Me a Coffee
            </motion.button>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark">
              About Me
            </h2>
            <p className="text-body text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              {profile.aboutMe}
            </p>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              Fun Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card-light dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-xl md:text-2xl italic text-text-secondary-light dark:text-text-secondary-dark mb-4">
              "{profile.quote}"
            </blockquote>
            <cite className="text-lg text-accent font-medium">
              — {profile.quoteAuthor}
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
