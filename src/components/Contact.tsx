import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a placeholder form.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-text-primary-light dark:text-text-primary-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Let's start a conversation!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
                Let's Connect
              </h3>
              <p className="text-body text-text-secondary-light dark:text-text-secondary-dark mb-8">
                Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Email
                  </h4>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    hello@example.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Phone
                  </h4>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    +1 (555) 123-4567
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-accent/10 rounded-full">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    Location
                  </h4>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    San Francisco, CA
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className="p-3 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="heading-secondary text-text-primary-light dark:text-text-primary-dark mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark"
                    placeholder="your@email.com"
                  />
                </div>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
