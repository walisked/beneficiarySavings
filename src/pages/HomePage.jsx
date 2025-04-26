import React from 'react';
import Hero from '../components/Hero';
import Market from './Market';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Movie Categories Section */}
      <Market />

    </div>
  );
};

export default HomePage;