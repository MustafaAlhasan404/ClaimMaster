'use client';

import React from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';

const logos = [
  {
    name: 'Dentrix',
    src: '/images/logos/Dentrix.png',
    width: 180, 
    height: 60
  },
  {
    name: 'Practice-Web',
    src: '/images/logos/Practice web .png',
    width: 200,
    height: 60
  },
  {
    name: 'Open Dental',
    src: '/images/logos/Open dental .png',
    width: 200,
    height: 60
  },
  {
    name: 'Eaglesoft',
    src: '/images/logos/Egale soft .png',
    width: 180,
    height: 60
  },
  {
    name: 'Idental Software',
    src: '/images/logos/Idental software .png',
    width: 180,
    height: 60
  },
  {
    name: 'Dentrix Ascend',
    src: '/images/logos/Dentrix asc.png',
    width: 200,
    height: 60
  }
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="py-12 overflow-hidden">      
      <div className="relative">
        <m.div 
          className="flex items-center justify-around gap-8 md:gap-16"
          initial={{ x: 0 }}
          animate={{ 
            x: [0, -2000],
            transition: { 
              repeat: Infinity, 
              duration: 60, 
              ease: "linear",
              repeatType: "loop"
            } 
          }}
        >
          {logos.map((logo, index) => (
            <m.div
              key={index}
              className="flex-shrink-0 mx-4 opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                width={logo.width} 
                height={logo.height}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                quality={90}
                priority={index < 3}
              />
            </m.div>
          ))}
          
          {/* Duplicate logos to create seamless loop effect */}
          {logos.map((logo, index) => (
            <m.div
              key={`duplicate-${index}`}
              className="flex-shrink-0 mx-4 opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                width={logo.width} 
                height={logo.height}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                quality={90}
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default LogoCarousel; 