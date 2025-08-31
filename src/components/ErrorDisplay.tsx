import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card-light dark:bg-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        
        <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
          Firebase Connection Issue
        </h2>
        
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 text-sm">
          {error}
        </p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        )}
        
        <div className="mt-4 text-xs text-text-secondary-light dark:text-text-secondary-dark">
          <p>Your portfolio is currently using sample data.</p>
          <p>Check the console for detailed error information.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
