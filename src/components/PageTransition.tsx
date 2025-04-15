'use client';

import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <m.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.2
        }}
        className="min-h-screen"
      >
        {children}
      </m.main>
    </AnimatePresence>
  );
};

export default PageTransition; 