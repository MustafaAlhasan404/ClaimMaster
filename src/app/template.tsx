'use client';

import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth motion
          }
        }}
        exit={{ 
          opacity: 0,
          y: -10,
          transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        className="w-full"
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
} 