import React from "react";
import { motion } from "framer-motion";

const SlidingButtons = () => {
  const buttons = [
    "Latest News",
    "Trending Products",
    "Community Updates",
    "Investment Tips",
    "Top MVP Savers",
    "Exclusive Offers",
  ];

  return (
    <div className="overflow-hidden bg-gray-100 py-3">
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {buttons.map((text, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md min-w-[150px] text-center"
          >
            {text}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingButtons;
