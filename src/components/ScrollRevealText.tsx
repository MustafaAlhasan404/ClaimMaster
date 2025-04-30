'use client';

import React, { useEffect, useState, useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Set initial CSS values based on direction
  const getInitialStyles = (direction: string) => {
    switch (direction) {
      case 'left': return { transform: 'translateX(-30px)' };
      case 'right': return { transform: 'translateX(30px)' };
      case 'top': return { transform: 'translateY(-30px)' };
      case 'bottom': return { transform: 'translateY(30px)' };
      default: return { transform: 'translateY(30px)' };
    }
  };

  const initialStyles = getInitialStyles(fromDirection);

  return (
    <div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      style={{ fontSize, color: textColor }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-2 relative"
          style={{ 
            marginBottom: '0.25rem',
            opacity: isVisible ? 1 : 0,
            ...initialStyles,
            transform: isVisible ? 'translate(0, 0)' : initialStyles.transform,
            transition: `transform 0.7s ease, opacity 0.7s ease`,
            transitionDelay: `${i * staggerDelay}s`,
          }}
        >
          {word}
          {showUnderline && (
            <span
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ 
                backgroundColor: underlineColor,
                width: isVisible ? '100%' : '0%',
                transition: 'width 0.5s ease',
                transitionDelay: `${i * staggerDelay + 0.3}s`,
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default ScrollRevealText; 