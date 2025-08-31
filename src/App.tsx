import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { useData } from './context/DataContext';

const PortfolioContent: React.FC = () => {
  console.log('PortfolioContent rendering...');
  const { profile, loading, error } = useData();

  console.log('DataContext values:', { profile, loading, error });

  if (loading) {
    console.log('Showing loading component...');
    return <Loading />;
  }

  if (error) {
    console.log('Showing error component...', error);
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Something went wrong
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  console.log('Rendering full portfolio with routing...');
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  console.log('App component rendering...');
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <PortfolioContent />
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
