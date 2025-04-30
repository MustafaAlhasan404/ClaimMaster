'use client';

import React, { useState } from 'react';

type MagnifyingTextProps = {
  text: string;
  className?: string;
  fontSize?: string;
  magnifyScale?: number;
  hoverColor?: string;
};

const MagnifyingText = ({
  text,
  className = '',
  fontSize = '2rem',
  magnifyScale = 1.5,
  hoverColor = '#2563EB',
}: MagnifyingTextProps) => {
  const letters = Array.from(text);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className={`inline-flex overflow-visible ${className}`}
      style={{ 
        fontSize, 
        letterSpacing: '-0.05em',
        lineHeight: '1.3',
        padding: '0.1em 0',
        minHeight: '1.5em',
        position: 'relative'
      }}
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
        
        const style: React.CSSProperties = {
          position: 'relative',
          display: 'inline-block',
          color: hasEffect ? hoverColor : 'currentColor',
          fontWeight: hasEffect ? 700 : 400,
          height: 'auto',
          overflow: 'visible',
          transition: 'all 0.3s ease',
          transform: hasEffect ? `scale(${1 + ((magnifyScale - 1) * effectIntensity)}) translateY(${-5 * effectIntensity}px)` : 'scale(1) translateY(0)',
          opacity: distance !== null 
            ? 0.3 + ((1 - 0.3) * (hasEffect ? effectIntensity : 0.5))
            : 1,
        };

        return (
          <span
            key={index}
            style={style}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        );
      })}
    </div>
  );
};

export default MagnifyingText; 