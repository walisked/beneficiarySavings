import React from 'react';

const SubmitButton = ({ label, loading }) => (
  <button
    type="submit"
    className={`w-full rounded-lg bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
      loading ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={loading}
  >
    {loading ? 'Processing...' : label}
  </button>
);

export default SubmitButton;
