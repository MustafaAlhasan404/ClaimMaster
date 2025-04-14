'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when path changes (user navigates to a new page)
  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow-sm sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/Asset 4.png" 
            alt="ClaimMasters Dental Billing Logo" 
            width={200} 
            height={200} 
            className="h-10 w-auto"
          />
          <span className="text-lg md:text-xl font-bold text-blue-600">ClaimMasters Dental Billing</span>
        </Link>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600 font-medium relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="hover:text-blue-600 font-medium relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/pricing" className="hover:text-blue-600 font-medium relative group">
            Pricing & Plans
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600 font-medium">
              Services
              <svg 
                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              <div className="py-1">
                <Link href="/services/insurance-verification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Insurance Verification
                </Link>
                <Link href="/services/dental-virtual-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Dental Virtual Assistant
                </Link>
                <Link href="/services/insurance-billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Insurance Billing and AR
                </Link>
                <Link href="/services/accounting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  Dental Accounting & Bookkeeping
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="hover:text-blue-600 font-medium relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto py-3">
              <motion.nav 
                className="flex flex-col gap-3"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/" className="py-2 hover:text-blue-600 font-medium block transition-colors duration-200">
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <Link href="/about" className="py-2 hover:text-blue-600 font-medium block transition-colors duration-200">
                    About
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Link href="/pricing" className="py-2 hover:text-blue-600 font-medium block transition-colors duration-200">
                    Pricing & Plans
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="py-2"
                >
                  <div 
                    className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div 
                        className="pl-4 flex flex-col gap-2 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link href="/services/insurance-verification" className="py-1 text-sm hover:text-blue-600 transition-colors duration-200">
                          Insurance Verification
                        </Link>
                        <Link href="/services/dental-virtual-assistant" className="py-1 text-sm hover:text-blue-600 transition-colors duration-200">
                          Dental Virtual Assistant
                        </Link>
                        <Link href="/services/insurance-billing" className="py-1 text-sm hover:text-blue-600 transition-colors duration-200">
                          Insurance Billing and AR
                        </Link>
                        <Link href="/services/accounting" className="py-1 text-sm hover:text-blue-600 transition-colors duration-200">
                          Dental Accounting & Bookkeeping
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link href="/blog" className="py-2 hover:text-blue-600 font-medium block transition-colors duration-200">
                    Blog
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  <Link href="/contact" className="py-2 hover:text-blue-600 font-medium block transition-colors duration-200">
                    Contact
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 