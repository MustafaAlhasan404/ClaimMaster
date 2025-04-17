'use client';

import React, { useEffect, useState } from 'react';
import { m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  threshold?: number;
  staggerDelay?: number;
  fromDirection?: 'left' | 'right' | 'top' | 'bottom';
  fontSize?: string;
  textColor?: string;
  showUnderline?: boolean;
  underlineColor?: string;
};

const ScrollRevealText = ({
  text,
  className = '',
  threshold = 0.1,
  staggerDelay = 0.05,
  fromDirection = 'bottom',
  fontSize = '2rem',
  textColor = 'currentColor',
  showUnderline = false,
  underlineColor = '#3B82F6'
}: ScrollRevealTextProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  const words = text.split(' ');

  // Set initial and animate positions based on direction
  const getInitialPosition = () => {
    switch (fromDirection) {
      case 'left': return { x: -100, opacity: 0 };
      case 'right': return { x: 100, opacity: 0 };
      case 'top': return { y: -50, opacity: 0 };
      case 'bottom': return { y: 50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.2, 0.65, 0.3, 0.9],
          delay: i * staggerDelay
        }
      }));
    }
  }, [controls, inView, staggerDelay]);

  return (
    <m.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      style={{ fontSize, color: textColor }}
    >
      {words.map((word, i) => (
        <m.span
          key={i}
          custom={i}
          initial={getInitialPosition()}
          animate={controls}
          className="inline-block mr-2 relative"
          style={{ marginBottom: '0.25rem' }}
        >
          {word}
          {showUnderline && (
            <m.span
              className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : { width: '0%' }}
              transition={{
                duration: 0.5,
                delay: i * staggerDelay + 0.3,
                ease: 'easeInOut'
              }}
              style={{ backgroundColor: underlineColor }}
            />
          )}
        </m.span>
      ))}
    </m.div>
  );
};

export default ScrollRevealText; 