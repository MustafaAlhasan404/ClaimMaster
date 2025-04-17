'use client';

import React from 'react';
import { m } from 'framer-motion';

type GradientTextProps = {
  text: string;
  className?: string;
  delay?: number;
  gradient?: string;
  duration?: number;
  style?: React.CSSProperties;
};

const GradientText = ({
  text,
  className = '',
  delay = 0.5,
  gradient = 'linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335)',
  duration = 0.8,
  style = {}
}: GradientTextProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Background text (invisible) */}
      <div className="opacity-0">{text}</div>
      
      {/* Gradient text */}
      <m.div
        className="absolute inset-0"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ 
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1] // Cubic bezier curve for smooth reveal
        }}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            width: 'fit-content',
            backgroundImage: gradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          {text}
        </div>
      </m.div>
    </div>
  );
};

export default GradientText; 