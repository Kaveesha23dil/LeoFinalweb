"use client"; 

import React, { useState, useEffect, useMemo } from "react";
import bgImage from "../assets/hero.png";


export default function HeroSection() {
  const sentences = useMemo(() => [
    "Leadership, Experience, Opportunity.",
    "We serve the community with passion.",
    "Empowering youth to create positive change.",
    "Together, we make the world a better place.",
  ], []);

  const [currentText, setCurrentText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 120;

    const timeout = setTimeout(() => {
      const fullSentence = sentences[sentenceIndex];

      if (isDeleting) {
        setCurrentText(fullSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(fullSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullSentence.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Static Welcome Text */}
      <div className="text-center pointer-events-none z-20 px-4 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          <span className="text-white">Welcome to </span>
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            LEO Club
          </span>
        </h1>
      </div>

      {/* Typing effect below */}
      <div className="text-center pointer-events-none z-20 px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed">
          {currentText}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* Blink animation */}
      <style>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
