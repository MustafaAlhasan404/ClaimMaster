'use client';

import React from 'react';
import { m } from 'framer-motion';

type WavyTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  waveHeight?: number;
  fontSize?: string;
  textColor?: string;
  effectColor?: string;
  loop?: boolean;
};

const WavyText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.04,
  waveHeight = 20,
  fontSize = '2rem',
  textColor = '#2563EB',
  effectColor = 'rgba(37, 99, 235, 0.1)',
  loop = true
}: WavyTextProps) => {
  const words = text.split(' ');

  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren, 
        delayChildren: delay * i 
      }
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,  // Increased damping for more stability
        stiffness: 100,
        duration: duration
      }
    },
    hidden: {
      opacity: 0,
      y: waveHeight,
    }
  };

  // Animation for the waving effect that's more subtle
  const waveAnimation = {
    animate: {
      y: [0, -waveHeight/3, 0, waveHeight/3, 0],
      transition: {
        duration: duration * 2.5, // Slower animation
        repeat: loop ? Infinity : 0,
        repeatType: 'loop' as const,
        ease: 'easeInOut',
        repeatDelay: 0.5, // Add delay between animations
      }
    }
  };

  // Style for the highlight/glow effect
  const effectStyle = {
    position: 'absolute' as const,
    bottom: -waveHeight/4,
    left: 0,
    right: 0,
    height: waveHeight,
    background: effectColor,
    borderRadius: '50%',
    filter: 'blur(7px)',
    zIndex: -1,
    opacity: 0.4, // Reduced opacity
  };

  return (
    <div className={`relative ${className}`}>
      <m.div
        className="inline-flex flex-wrap"
        style={{ 
          fontSize,
          color: textColor,
          cursor: 'default'
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-flex mr-2 relative">
            {Array.from(word).map((letter, letterIndex) => (
              <m.span
                key={`letter-${letterIndex}`}
                className="relative inline-block"
                style={{ marginRight: '0.01em' }}
                variants={child}
                custom={(wordIndex * 10) + letterIndex}
              >
                {letter}
                {/* Only add wave effect to certain letters for better performance and aesthetics */}
                {(letterIndex === Math.floor(word.length / 2) || letterIndex === word.length - 1) && (
                  <m.span
                    style={effectStyle}
                    variants={waveAnimation}
                    animate="animate"
                  />
                )}
              </m.span>
            ))}
          </span>
        ))}
      </m.div>
    </div>
  );
};

export default WavyText; 