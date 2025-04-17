'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

type RotatingTextProps = {
  texts: string[];
  className?: string;
  duration?: number;
  autoRotateInterval?: number;
  textColor?: string;
  activeTextColor?: string;
  fontSize?: string;
  showControls?: boolean;
  backgroundColor?: string;
  activeBackgroundColor?: string;
};

const RotatingText = ({
  texts,
  className = '',
  duration = 0.7,
  autoRotateInterval = 5000,
  textColor = '#4B5563',
  activeTextColor = '#1E40AF',
  fontSize = '2rem',
  showControls = true,
  backgroundColor = '#EFF6FF',
  activeBackgroundColor = '#FFFFFF'
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  // Auto-rotation effect
  React.useEffect(() => {
    if (autoRotateInterval > 0) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, autoRotateInterval);
      
      return () => clearInterval(timer);
    }
  }, [texts.length, autoRotateInterval]);
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  const variants = {
    enter: (direction: number) => ({
      rotateX: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
      z: -100,
    }),
    center: {
      rotateX: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom easing
      },
    },
    exit: (direction: number) => ({
      rotateX: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
      z: -100,
      transition: {
        duration,
      },
    }),
  };

  return (
    <div className={`${className} relative`}>
      <div 
        className="relative overflow-hidden" 
        style={{ 
          perspective: '800px',
          transformStyle: 'preserve-3d',
          minHeight: fontSize === '2rem' ? '3rem' : fontSize === '3rem' ? '4rem' : fontSize === '4rem' ? '5rem' : '3rem',
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <m.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 px-6 py-3 rounded-lg flex items-center justify-center text-center"
            style={{ 
              fontSize, 
              color: activeTextColor,
              backgroundColor: activeBackgroundColor,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transformStyle: 'preserve-3d',
            }}
          >
            {texts[currentIndex]}
          </m.div>
        </AnimatePresence>
      </div>
      
      {showControls && texts.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous text"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex space-x-1">
            {texts.map((_, i) => (
              <span
                key={i}
                className={`block w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next text"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default RotatingText; 