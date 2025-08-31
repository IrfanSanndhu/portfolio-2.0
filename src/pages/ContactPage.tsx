import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get In Touch
          </h1>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Let's start a conversation!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
              Let's Connect
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Email
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Phone
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Location
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark resize-none"
                  placeholder="Tell me more about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
