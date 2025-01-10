import React from 'react';

const WalletOverview = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Wallet Overview</h2>
        <div className="p-4 bg-gray-100 rounded-lg mt-4">
          <p className="text-lg text-gray-700">Wallet Balance: $500.00</p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Add Funds</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2">Gift Funds</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">Share</button>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;