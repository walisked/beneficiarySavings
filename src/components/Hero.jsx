import React, { useState } from 'react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      // Implement search functionality here
    } else {
      console.log('Please enter a search query.');
    }
  };

  return (
    <section className="bg-gray-900 text-white py-24 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Title and Description */}
        <h1 className="text-4xl font-bold mb-4">Featured Movie Title</h1>
        <p className="text-lg mb-6">Explore the best movies available right now.</p>

        {/* Watch Now Button */}
        <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold uppercase">
          Watch Now
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-12 w-full max-w-lg mx-auto">
          <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white font-semibold"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
