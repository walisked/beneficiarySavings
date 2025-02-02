import React from "react";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";
import CommunityHighlights from "../components/CommunityHighlights";
import MVPSavers from "../components/MVPSavers";

const Market = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex flex-col space-y-8">
        
        {/* Trending Products */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Trending Products</h2>
          <div className="flex overflow-x-auto space-x-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Latest News */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Latest News</h2>
          <div className="flex overflow-x-auto space-x-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        {/* Community Highlights */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Community Highlights</h2>
          <div className="flex overflow-x-auto space-x-4">
            <CommunityHighlights />
            <CommunityHighlights />
            <CommunityHighlights />
            <CommunityHighlights />
          </div>
        </div>

        {/* Top MVP Savers */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Top MVP Savers</h2>
          <div className="flex overflow-x-auto space-x-4">
            <MVPSavers />
            <MVPSavers />
            <MVPSavers />
            <MVPSavers />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Market;
