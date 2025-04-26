import React from 'react';

const InputField = ({ id, label, type, name, value, onChange, error }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-gray-600 font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
    />
    {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
  </div>
);

export default InputField;
