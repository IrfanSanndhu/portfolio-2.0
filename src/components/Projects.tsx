import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { useData } from '../context/DataContext';

const Projects: React.FC = () => {
  const { projects, loading } = useData();

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-width">
          <div className="animate-pulse space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-text-primary-light dark:text-text-primary-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  {/* Placeholder for project thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={64} className="text-white opacity-80" />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={24} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="heading-secondary text-text-primary-light dark:text-text-primary-dark">
                    {project.projectName}
                  </h3>
                  <p className="text-body text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.languagesUsed.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
