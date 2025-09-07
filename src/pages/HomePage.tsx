import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Download, Loader2 } from 'lucide-react';

const HomePage: React.FC = () => {
  const { profile, cv_link } = useData();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      if (cv_link?.downloadUrl) {
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = cv_link.downloadUrl;
        link.download = 'My-Latest_CV.pdf';
        link.rel = 'noopener noreferrer';
        
        // Add event listener to detect when download actually starts
        const handleClick = () => {
          // Keep button disabled for 5 seconds after download starts
          setTimeout(() => {
            setIsDownloading(false);
          }, 7000);
        };
        
        link.addEventListener('click', handleClick);
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Fallback: reset after 10 seconds if something goes wrong
        setTimeout(() => {
          if (isDownloading) {
            setIsDownloading(false);
          }
        }, 10000);
      } else {
        alert('CV download link is not available. Please contact me directly.');
        setIsDownloading(false);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
      setIsDownloading(false);
    }
  };

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Hero Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-primary text-text-primary-light dark:text-text-primary-dark"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark font-medium"
          >
            {profile.slogan}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-body text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto"
          >
            {profile.summary}
          </motion.p>

          {/* Current Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block px-6 py-3 bg-card-light dark:bg-card-dark rounded-full border border-gray-200 dark:border-gray-700"
          >
            <span className="text-text-primary-light dark:text-text-primary-dark font-medium">
              {profile.currentPosition}
            </span>
          </motion.div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark text-center mb-8">
            About Me
          </h2>
          <p className="text-body text-text-secondary-light dark:text-text-secondary-dark text-center leading-relaxed">
            {profile.aboutMe}
          </p>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="heading-secondary text-text-primary-light dark:text-text-primary-dark text-center mb-12">
            Fun Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {profile.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="p-6 bg-card-light dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-center">
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-text-primary-light dark:text-text-primary-dark italic mb-4">
              "{profile.quote}"
            </p>
            <footer className="text-text-secondary-light dark:text-text-secondary-dark">
              — {profile.quoteAuthor}
            </footer>
          </blockquote>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            className={`px-8 py-4 rounded-lg transition-colors font-medium flex items-center gap-2 ${
              isDownloading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-accent text-white hover:bg-blue-600'
            }`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download CV
              </>
            )}
          </button>
          <button className="px-8 py-4 bg-card-light dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium border border-gray-200 dark:border-gray-700">
            Buy Me a Coffee
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
