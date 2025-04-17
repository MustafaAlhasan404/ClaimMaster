'use client';

import { ReactNode } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
} 