import React from 'react';

const MovieCategories = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Movie Categories</h1>
      <div className="flex flex-col space-y-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Trending</h2>
          <div className="flex overflow-x-auto space-x-4">
            {/* Trending Movies Carousel/Grid */}
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Recently Added</h2>
          <div className="flex overflow-x-auto space-x-4">
            {/* Recently Added Movies Carousel/Grid */}
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Recommended for You</h2>
          <div className="flex overflow-x-auto space-x-4">
            {/* Recommended Movies Carousel/Grid */}
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
            <div className="w-40 h-60 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCategories;