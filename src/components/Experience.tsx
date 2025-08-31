import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';
import { useData } from '../context/DataContext';

const Experience: React.FC = () => {
  const { experiences, loading } = useData();

  if (loading) {
    return (
      <section id="experience" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-width">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="space-y-2">
                  {[1, 2].map((j) => (
                    <div key={j} className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-text-primary-light dark:text-text-primary-dark mb-4">
            Work Experience
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            My professional journey through various roles and companies, each contributing to my growth and expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Company & Role Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building size={20} className="text-accent" />
                          <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                            {experience.company}
                          </h3>
                        </div>
                        <h4 className="text-lg font-medium text-accent mb-2">
                          {experience.role}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description Bullets */}
                    <div className="space-y-2">
                      {experience.description.map((desc, descIndex) => (
                        <motion.div
                          key={descIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: descIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-4">
            Ready for the Next Chapter
          </h3>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-6">
            I'm always open to new opportunities and exciting challenges. Let's discuss how we can work together!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
