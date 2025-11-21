import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="logo-animation">
            <div className="circle-wrapper">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
            <div className="logo-text">
              <h1 className="brand-name">Lakshmithra</h1>
              <p className="brand-tagline">Finance</p>
            </div>
          </div>
        </div>
        <div className="preloader-spinner">
          <div className="spinner-border text-gold" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="loading-text">Loading your financial journey...</p>
      </div>
    </div>
  );
};

export default Preloader;