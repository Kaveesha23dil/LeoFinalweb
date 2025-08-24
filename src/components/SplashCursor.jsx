import React, { useEffect, useState, useRef } from 'react';

const SplashCursor = () => {
  const [splashes, setSplashes] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const handleMouseMove = (e) => {
      const rect = heroElement.getBoundingClientRect();
      const splash = {
        id: Date.now(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      setSplashes(prev => [...prev, splash]);

      setTimeout(() => {
        setSplashes(prev => prev.filter(s => s.id !== splash.id));
      }, 800);
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="absolute inset-0 pointer-events-none z-10">
      {splashes.map(splash => (
        <div
          key={splash.id}
          className="absolute animate-splash"
          style={{
            left: splash.x - 15,
            top: splash.y - 15,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-60 animate-ping" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white opacity-80" />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes splash {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-splash {
          animation: splash 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashCursor;