'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

type MagnifyingTextProps = {
  text: string;
  className?: string;
  fontSize?: string;
  magnifyScale?: number;
  staggerAmount?: number;
  textColor?: string;
  hoverColor?: string;
  letterSpacing?: string;
  fadeAmount?: number;
};

const MagnifyingText = ({
  text,
  className = '',
  fontSize = '2rem',
  magnifyScale = 1.5,
  staggerAmount = 0.02,
  textColor = '#1F2937',
  hoverColor = '#2563EB',
  letterSpacing = '-0.05em',
  fadeAmount = 0.3,
}: MagnifyingTextProps) => {
  const letters = Array.from(text);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className={`inline-flex overflow-hidden ${className}`}
      style={{ fontSize, letterSpacing }}
    >
      {letters.map((letter, index) => {
        // Calculate distance from hovered index
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : null;
        
        // Calculate effect intensity based on distance
        const effectIntensity = distance !== null 
          ? Math.max(0, 1 - distance * 0.2) 
          : 0;
        
        // Determine if this letter should have an effect applied
        const hasEffect = distance !== null && distance <= 4;
        
        return (
          <m.span
            key={index}
            style={{ 
              position: 'relative',
              display: 'inline-block',
              color: hasEffect 
                ? `rgba(${parseInt(hoverColor.slice(1, 3), 16)}, ${parseInt(hoverColor.slice(3, 5), 16)}, ${parseInt(hoverColor.slice(5, 7), 16)}, ${effectIntensity})` 
                : textColor,
              fontWeight: hasEffect ? 700 : 400,
            }}
            animate={{
              scale: hasEffect ? 1 + ((magnifyScale - 1) * effectIntensity) : 1,
              y: hasEffect ? -5 * effectIntensity : 0,
              opacity: distance !== null 
                ? fadeAmount + ((1 - fadeAmount) * (hasEffect ? effectIntensity : 0.5))
                : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              delay: index * staggerAmount,
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </m.span>
        );
      })}
    </div>
  );
};

export default MagnifyingText; 