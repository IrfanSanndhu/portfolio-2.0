import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const SkillsPage: React.FC = () => {
  const { skills } = useData();

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
            Skills & Expertise
          </h1>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6 text-center">
                {skillGroup.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-8">
            Continuous Learning
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto mb-8">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card-light dark:bg-card-dark rounded-full border border-gray-200 dark:border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">
              Always learning new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
