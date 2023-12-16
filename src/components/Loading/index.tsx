// LoadingComponent.tsx

import React, { useState, useEffect } from 'react';
import './LoadingComponent.css';

interface LoadingComponentProps {
}

const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate some asynchronous operation (e.g., API call) with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-container ${loading ? 'loading' : ''}`}>
      <div className="loading-spinner"></div>
      <div className="loading-content"></div>
    </div>
  );
};

export default LoadingComponent;
