"use client";
import React from "react";
import { motion } from "framer-motion";

const Button2 = () => {
  const handleClick = () => {
    window.location.href = "/kontakt";
  };

  return (
    <div className="relative inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 overflow-hidden">
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="relative text-white w-full h-full"
        onClick={handleClick}
      >
        <span>Kontakt oss</span>
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%", "100%"], opacity: [0.5, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2, // Increased duration for smoother animation
            repeatDelay: 0.5, // Reduced repeat delay for continuous motion
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </motion.button>
    </div>
  );
};

export default Button2;
