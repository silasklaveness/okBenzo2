"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  const handleClick = () => {
    window.location.href = "/bestill";
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="relative px-5 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-500 text-white text-xl tracking-widest font-bold overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-transparent hover:text-gray-700"
        onClick={handleClick}
      >
        <span className="relative z-10 text-bold">Bestill</span>
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1,
            repeatDelay: 1,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
        />
      </motion.button>
    </div>
  );
};

export default Button;
