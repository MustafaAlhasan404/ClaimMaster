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
        type: 'tween',
        duration: 0.15
      }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
} 