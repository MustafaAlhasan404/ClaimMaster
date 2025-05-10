'use client';

import React from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';

const logos = [
  {
    name: 'Denticon',
    src: 'https://www.planetdds.com/wp-content/uploads/2022/03/denticon-logo.svg',
    width: 180, 
    height: 60
  },
  {
    name: 'Practice-Web',
    src: 'https://practiceweb.com/wp-content/uploads/2022/12/Practice-Web-Logo-300x100-1.png',
    width: 200,
    height: 60
  },
  {
    name: 'Dentrix',
    src: 'https://www.dentrix.com/images/branding/HSPSLogos/rgb/dentrix-logo-rgb-hires.png',
    width: 180,
    height: 60
  },
  {
    name: 'OpenDental',
    src: 'https://www.opendental.com/img/ODLogo.png',
    width: 200,
    height: 60
  },
  {
    name: 'Eaglesoft',
    src: 'https://www.pattersondental.com/Media/Default/products/Practice-Management/Eaglesoft_logo.png',
    width: 180,
    height: 60
  },
  {
    name: 'Curve Dental',
    src: 'https://www.curvedental.com/hubfs/raw_assets/public/Curve-Dental-Oct2022/images/curve-hero-logo.svg',
    width: 180,
    height: 60
  },
  {
    name: 'Dentrix Ascend',
    src: 'https://www.dentrixascend.com/Themes/Default/Content/Images/DA_Logo.svg',
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
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default LogoCarousel; 