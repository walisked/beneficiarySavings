// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import MovieCategories from '../components/MovieCategories';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <Hero />

      {/* Movie Categories Section */}
      <MovieCategories />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
