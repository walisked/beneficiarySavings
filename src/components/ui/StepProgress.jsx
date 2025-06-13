// src/components/ui/StepProgress.jsx
import React from 'react';

const StepProgress = ({ steps, currentStep }) => {
  return (
    <div className="relative flex justify-between items-center mb-8">
      {steps.map((label, index) => (
        <div key={index} className="relative flex flex-col items-center w-full">
          {/* Progress line */}
          {index !== 0 && (
            <div 
              className={`absolute top-4 left-1/2 w-full h-1 ${
                currentStep >= index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              style={{ transform: 'translateX(-50%)' }}
            />
          )}
          
          {/* Step circle */}
          <div 
            className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= index 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </div>
          
          {/* Step label */}
          <span 
            className={`mt-2 text-xs font-medium ${
              currentStep >= index ? 'text-indigo-600' : 'text-gray-500'
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;