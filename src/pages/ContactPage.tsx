import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, BookOpen, Youtube, CheckCircle, AlertCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

const ContactPage: React.FC = () => {
  const { profile, loading } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Replace this with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbalqwv';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
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
              {!loading && profile?.contact?.email && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Email
                    </h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      {profile.contact.email}
                    </p>
                  </div>
                </div>
              )}

              {!loading && profile?.contact?.phone && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Phone
                    </h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      {profile.contact.phone}
                    </p>
                  </div>
                </div>
              )}

              {!loading && profile?.contact?.location && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Location
                    </h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      {profile.contact.location}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
            {!loading && (profile?.contact?.github || profile?.contact?.linkedin || profile?.contact?.x || profile?.contact?.udemy || profile?.contact?.youtube) && (
              <div className="pt-6">
                <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {profile.contact.github && (
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {profile.contact.linkedin && (
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {profile.contact.x && (
                    <a
                      href={profile.contact.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {profile.contact.udemy && (
                    <a
                      href={profile.contact.udemy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <BookOpen className="w-5 h-5" />
                    </a>
                  )}
                  {profile.contact.youtube && (
                    <a
                      href={profile.contact.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card-light dark:bg-card-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-gray-200 dark:border-gray-700"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            )}
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
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-200 text-sm">{submitMessage}</p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="ml-auto text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 text-sm underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200 text-sm">{submitMessage}</p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="ml-auto text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 text-sm underline"
                  >
                    Try again
                  </button>
                </motion.div>
              )}

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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me more about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
