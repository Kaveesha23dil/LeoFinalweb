import React from "react";
import { motion } from "framer-motion";

const SectionDivider = ({ variant = "wave", className = "" }) => {
  const Wave = () => (
    <div className={`relative w-full h-24 ${className}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.1)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,40 C300,60 600,20 900,40 C1050,50 1150,30 1200,40 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );

  const Geometric = () => (
    <div className={`relative w-full h-16 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-400/20 rounded-full mx-4"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );

  const Gradient = () => (
    <div className={`relative w-full h-12 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent" />
    </div>
  );

  switch (variant) {
    case "wave":
      return <Wave />;
    case "geometric":
      return <Geometric />;
    case "gradient":
      return <Gradient />;
    default:
      return <Wave />;
  }
};

export default SectionDivider;