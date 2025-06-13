// src/components/ui/ValidationError.jsx
import React from 'react';

const ValidationError = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="mt-2 text-red-600 text-sm flex items-start">
      <svg className="h-4 w-4 mr-1 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {error}
    </div>
  );
};

export default ValidationError;