'use client';

import React from 'react';
import { m } from 'framer-motion';

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words' | 'lines' | 'reveal';
  color?: string;
};

const AnimatedHeading = ({ 
  text, 
  className = "", 
  delay = 0.2, 
  type = "chars",
  color
}: AnimatedHeadingProps) => {
  
  // Split text into individual words
  const words = text.split(' ');
  
  // Animation variants based on the chosen animation type
  const animations = {
    chars: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05 + delay,
          duration: 0.3,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      }),
    },
    words: {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1 + delay,
          duration: 0.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      }),
    },
    lines: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    },
    reveal: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
        }
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Conditional rendering based on animation type
  if (type === 'words') {
    return (
      <m.h1 
        className={className}
        initial="hidden"
        animate="visible"
        variants={animations.lines}
      >
        {words.map((word, i) => (
          <m.span 
            key={i} 
            className="inline-block mr-2"
            custom={i}
            variants={animations.words}
          >
            {word}
          </m.span>
        ))}
      </m.h1>
    );
  }
  
  if (type === 'chars') {
    return (
      <m.h1 
        className={className}
        initial="hidden"
        animate="visible"
        variants={animations.lines}
      >
        {words.map((word, i) => (
          <span key={`word-${i}`} className="inline-block mr-2">
            {word.split('').map((char, j) => (
              <m.span
                key={`char-${j}`}
                custom={i * word.length + j}
                variants={animations.chars}
                className="inline-block"
                style={{ color: color }}
              >
                {char}
              </m.span>
            ))}
          </span>
        ))}
      </m.h1>
    );
  }
  
  if (type === 'reveal') {
    return (
      <div className="overflow-hidden">
        <m.h1 
          className={className}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {text}
        </m.h1>
      </div>
    );
  }
  
  // Default fallback
  return <h1 className={className}>{text}</h1>;
};

export default AnimatedHeading; 