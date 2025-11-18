import React from 'react';

const SectionTitle = ({ title, subtitle,description, centered = true }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>

      {subtitle && (
        <p
          className="fw-bold fs-5"
          style={{color:'#FFA500', maxWidth: '700px', margin: centered ? '0 auto' : '0' }}
        >
          {subtitle}
        </p>
      )}

      <h2
        className="fw-bold mb-3"
        style={{ color: '#003B6D', fontSize: '2.5rem' }}
      >
        {title}
      </h2>

      
      {description && (
        <p
          className="text-muted fs-5"
          style={{ color: '#003B6D', maxWidth: '700px', margin: centered ? '0 auto' : '0' }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
