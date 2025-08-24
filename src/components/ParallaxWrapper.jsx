import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxWrapper = ({ children, speed = 0.5, className = "" }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -speed * 100]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #3B82F6, #06B6D4);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #2563EB, #0891B2);
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  return <div>{children}</div>;
};

export default ParallaxWrapper;