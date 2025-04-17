'use client';

import React, { useEffect, useState } from 'react';
import { m, useAnimation } from 'framer-motion';

type TypewriterTextProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursorColor?: string;
  showCursor?: boolean;
  loop?: boolean;
  pauseTime?: number;
};

const TypewriterText = ({
  text,
  className = '',
  delay = 0.5,
  speed = 0.05,
  cursorColor = '#4285F4',
  showCursor = true,
  loop = false,
  pauseTime = 2
}: TypewriterTextProps) => {
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Type effect
  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    // Cursor blink effect
    if (showCursor) {
      cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);
    }

    const startTyping = () => {
      setIsTyping(true);
      typingInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.substring(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          if (loop) {
            pauseTimeout = setTimeout(() => {
              index = 0;
              setDisplayedText('');
              startTyping();
            }, pauseTime * 1000);
          }
        }
      }, speed * 1000);
    };

    // Initial delay before typing starts
    const initialDelay = setTimeout(() => {
      startTyping();
    }, delay * 1000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
      clearInterval(cursorInterval);
    };
  }, [text, delay, speed, loop, pauseTime, showCursor]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (
        <m.span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            backgroundColor: cursorColor,
            marginLeft: '2px',
            opacity: cursorVisible ? 1 : 0
          }}
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};

export default TypewriterText; 