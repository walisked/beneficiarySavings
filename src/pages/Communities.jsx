import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const communities = [
  {
    name: "Tech Innovators",
    category: "Technology",
    subCategory: "Software Development",
    members: 1200,
    brm: "John Doe",
    rating: 4.5,
    savedPercentage: 75,
  },
  {
    name: "Green Earth Warriors",
    category: "Environment",
    subCategory: "Climate Action",
    members: 850,
    brm: "Sarah Green",
    rating: 4.8,
    savedPercentage: 90,
  },
  {
    name: "Startup Founders Hub",
    category: "Business",
    subCategory: "Entrepreneurship",
    members: 1500,
    brm: "Mark Stevens",
    rating: 4.2,
    savedPercentage: 60,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-yellow-500" />
      ))}
    </div>
  );
};

const CommunityPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">Community Hub</h1>
        
        {communities.map((community, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{community.name}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Category: {community.category} | Sub: {community.subCategory}</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Members: {community.members}</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Community BRM: <span className="font-semibold">{community.brm}</span></p>
            
            <div className="flex items-center mt-2">
              <span className="text-gray-700 dark:text-gray-300 mr-2">Rating:</span>
              {renderStars(community.rating)}
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${community.savedPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{community.savedPercentage}% saved so far</p>
            </div>

            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all">
              Request to Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
