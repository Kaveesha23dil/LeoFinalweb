import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import achiraImg from "../assets/achira.webp";
import akilaImg from "../assets/Akila.webp";
import kaushalyaImg from "../assets/Kaushalya.webp";

const leaders = [
  {
    id: 1,
    name: "Leo Achira Sadharanga",
    role: "President",
    img: achiraImg,
    position: "center-top",
    animation: "fadeInDown",
  },
  {
    id: 2,
    name: "Leo Akila Shehari",
    role: "Vice President",
    img: akilaImg,
    position: "left-bottom",
    animation: "slideInLeft",
  },
  {
    id: 3,
    name: "Leo Kaushalya Prabodhini",
    role: "Secretary",
    img: kaushalyaImg,
    position: "right-bottom",
    animation: "slideInRight",
  },
];

export default function LeadershipSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-900 to-black py-8 px-6 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="px-4 py-1 rounded-full bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-sm font-semibold tracking-wider">
            EXECUTIVE BOARD
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
            We Are Leaders Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              Work Together!
            </span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
            We believe in youth leadership through service. Our executive team
            guides and empowers Leos to become tomorrow's leaders—together.
          </p>
          <Link to="/about" className="inline-block mt-6">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 hover:opacity-90 text-black font-semibold rounded-xl shadow-lg transition touch-manipulation">
              View Our Leadership ↗
            </button>
          </Link>
        </motion.div>

        {/* RIGHT SIDE - Team cards */}
        <div className="w-full">
          {/* Mobile Layout: Single Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 justify-items-center">
            {leaders.map((leader, index) => {
              const getAnimation = () => {
                return {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                };
              };

              const animation = getAnimation();

              return (
                <motion.div
                  key={leader.id}
                  initial={animation.initial}
                  animate={inView ? animation.animate : animation.initial}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs cursor-pointer"
                >
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{leader.name}</h3>
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-black rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                      {leader.role}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Layout: Positioned Cards */}
          <div className="hidden lg:block relative h-[500px] flex justify-center lg:justify-end">
            {leaders.map((leader, index) => {
              const getAnimation = () => {
                switch (leader.animation) {
                  case "fadeInDown":
                    return {
                      initial: { opacity: 0, y: -50 },
                      animate: { opacity: 1, y: 0 },
                    };
                  case "slideInLeft":
                    return {
                      initial: { opacity: 0, x: -100 },
                      animate: { opacity: 1, x: 0 },
                    };
                  case "slideInRight":
                    return {
                      initial: { opacity: 0, x: 100 },
                      animate: { opacity: 1, x: 0 },
                    };
                  default:
                    return {
                      initial: { opacity: 0, y: 50 },
                      animate: { opacity: 1, y: 0 },
                    };
                }
              };

              const animation = getAnimation();

              return (
                <motion.div
                  key={leader.id}
                  initial={animation.initial}
                  animate={inView ? animation.animate : animation.initial}
                  transition={{ 
                    delay: index * 0.4, 
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  className={`absolute transform-gpu ${
                    leader.position === "center-top" ? "top-0 left-1/2 -translate-x-1/2 z-20" : ""
                  } ${
                    leader.position === "left-bottom" ? "bottom-0 left-0" : ""
                  } ${
                    leader.position === "right-bottom" ? "bottom-0 right-0" : ""
                  } bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl w-48 sm:w-56 cursor-pointer`}
                >
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-60 object-cover transition-transform duration-300"
                  />
                  <div className="p-3 text-center">
                    <h3 className="text-white font-semibold text-sm">{leader.name}</h3>
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-black rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                      {leader.role}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
