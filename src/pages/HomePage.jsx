import React from 'react';
import Hero from '../components/Hero';
import ScrollableButtons from '../components/ScrollableButtons';
import Footer from '../components/Footer';
import Market from './Market';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />
      <ScrollableButtons />

      {/* Movie Categories Section */}
      <Market />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;