import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const Skills: React.FC = () => {
  const { skills, loading } = useData();

  if (loading) {
    return (
      <section id="skills" className="section-padding bg-background-light dark:bg-background-dark">
        <div className="container-width">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
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
    <section id="skills" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-text-primary-light dark:text-text-primary-dark mb-4">
            Skills & Technologies
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's what I'm proficient in:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card-light dark:bg-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                {skillCategory.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
            Always Learning
          </h3>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-8">
            I believe in continuous learning and staying up-to-date with the latest technologies and best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Continuous Learning', 'Problem Solving', 'Team Collaboration', 'Code Review', 'Documentation', 'Testing'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
