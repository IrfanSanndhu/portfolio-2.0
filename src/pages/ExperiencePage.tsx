import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const { experiences } = useData();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary text-text-primary-light dark:text-text-primary-dark mb-4">
            Professional Experience
          </h1>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            My journey in the tech industry, from early roles to senior positions, each contributing to my growth as a developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${
                index !== experiences.length - 1 ? 'mb-12' : ''
              }`}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-accent/30"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background-light dark:border-background-dark"></div>

              {/* Content */}
              <div className="ml-20">
                <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-4 text-text-secondary-light dark:text-text-secondary-dark">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-3 uppercase tracking-wide">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
            Ready for the Next Chapter
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities and exciting challenges. Let's discuss how we can work together.
          </p>
          <button className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
