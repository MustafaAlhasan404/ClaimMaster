'use client';

import React from 'react';
import { m } from 'framer-motion';

type StaggeredTextProps = {
  text: string;
  className?: string;
  delay?: number;
  staggerAmount?: number;
  fontSize?: string;
  highlightWords?: string[];
  highlightColor?: string;
};

const StaggeredText = ({
  text,
  className = '',
  delay = 0.1,
  staggerAmount = 0.03,
  fontSize = '2rem',
  highlightWords = [],
  highlightColor = '#4285F4'
}: StaggeredTextProps) => {
  const words = text.split(' ');

  // Animation for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount,
        delayChildren: delay,
      },
    },
  };

  // Animation for each word
  const wordVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      rotateX: 30
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <m.div
      style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        fontSize,
        letterSpacing: '-0.02em',
        lineHeight: '1.2',
      }}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word);
        
        return (
          <m.span
            key={i}
            variants={wordVariants}
            style={{ 
              display: 'inline-block',
              marginRight: '0.5rem',
              marginBottom: '0.25rem',
              color: isHighlighted ? highlightColor : 'inherit',
              fontWeight: isHighlighted ? 'bold' : 'inherit',
            }}
          >
            {word}
          </m.span>
        );
      })}
    </m.div>
  );
};

export default StaggeredText; 