import React from 'react';

const SectionTitle = ({ title, subtitle, description, centered = true }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className="text-uppercase fw-bold"
          style={{
            color: '#FFA500',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            maxWidth: '700px',
            margin: centered ? '0 auto 16px' : '0 0 16px',
            fontWeight: 600
          }}
        >
          {subtitle}
        </p>
      )}

      <h2
        className="fw-bold mb-3"
        style={{
          color: '#003B6D',
          fontSize: '2.75rem',
          fontWeight: 700,
          lineHeight: 1.2
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            color: '#4c627a',
            fontSize: '1rem',
            maxWidth: '700px',
            margin: centered ? '0 auto' : '0',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
