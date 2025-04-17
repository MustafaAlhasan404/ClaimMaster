'use client';

import React from 'react';
import { m } from 'framer-motion';

type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: boolean;
};

const AnimatedCard = ({
  children,
  delay = 0,
  className = '',
  hoverEffect = true
}: AnimatedCardProps) => {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        hoverEffect
          ? {
              y: -10,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.2 }
            }
          : undefined
      }
    >
      {children}
    </m.div>
  );
};

export default AnimatedCard; 