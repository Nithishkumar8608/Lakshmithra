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
      <div className="preloader-background">
        <div className="animated-bg-element bg-element-1"></div>
        <div className="animated-bg-element bg-element-2"></div>
        <div className="animated-bg-element bg-element-3"></div>
      </div>

      <div className="preloader-content">
        <div className="preloader-logo">
          <div className="logo-animation">
            <div className="diamond-wrapper">
              <svg 
                className="diamond-icon" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#003B6D', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                <polygon 
                  points="50,10 90,50 50,90 10,50" 
                  fill="url(#diamondGradient)" 
                  opacity="0.9"
                />
                <polygon 
                  points="50,25 75,50 50,75 25,50" 
                  fill="none" 
                  stroke="#FFA500" 
                  strokeWidth="2"
                />
              </svg>

              <div className="rotating-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>

            <div className="logo-text">
              <h1 className="brand-name">Lakshmithra</h1>
              <p className="brand-tagline">FINANCE</p>
            </div>
          </div>
        </div>

        <div className="progress-indicator">
          <div className="progress-line"></div>
          <div className="progress-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>

        <p className="loading-text">
          <span className="loading-word">Loading</span>
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
        
        <p className="loading-subtitle">Your financial journey begins here</p>
      </div>
    </div>
  );
};

export default Preloader;