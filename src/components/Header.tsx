'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-blue-600 hidden sm:inline">ClaimMasters Dental Billing</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/pricing" className="hover:text-blue-600 font-medium">
            Pricing & Plans
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600 font-medium">
              Services
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition-all">
              <div className="py-1">
                <Link href="/services/insurance-verification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Insurance Verification
                </Link>
                <Link href="/services/dental-virtual-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Dental Virtual Assistant
                </Link>
                <Link href="/services/insurance-billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Insurance Billing and AR
                </Link>
                <Link href="/services/accounting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Dental Accounting & Bookkeeping
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="hover:text-blue-600 font-medium">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-3">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="py-2 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="py-2 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/pricing" className="py-2 hover:text-blue-600 font-medium">
                Pricing & Plans
              </Link>
              <div className="py-2">
                <div className="font-medium mb-2">Services</div>
                <div className="pl-4 flex flex-col gap-2">
                  <Link href="/services/insurance-verification" className="py-1 text-sm hover:text-blue-600">
                    Insurance Verification
                  </Link>
                  <Link href="/services/dental-virtual-assistant" className="py-1 text-sm hover:text-blue-600">
                    Dental Virtual Assistant
                  </Link>
                  <Link href="/services/insurance-billing" className="py-1 text-sm hover:text-blue-600">
                    Insurance Billing and AR
                  </Link>
                  <Link href="/services/accounting" className="py-1 text-sm hover:text-blue-600">
                    Dental Accounting & Bookkeeping
                  </Link>
                </div>
              </div>
              <Link href="/blog" className="py-2 hover:text-blue-600 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="py-2 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 