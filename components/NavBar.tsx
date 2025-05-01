// components/Navbar.tsx (No useMediaQuery Hook)
'use client'; // Still needed for useState

import React, { useState } from 'react';
import Link from 'next/link';
// No custom hook import needed

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  // Common Search Bar Component
  const searchBar = (
    <div className="flex items-center">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded-md text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md text-sm font-medium"
        >
          Search
        </button>
      </div>
    </div>
  );

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">

      {/* --- Desktop Navigation (Uses Tailwind 'hidden md:block') --- */}
      <div className="hidden md:block"> {/* Shows only on md screens and up */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Links */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/services" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/announcements" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Announcements</Link>
              <Link href="/resident" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Resident Profile</Link>
              <Link href="/dashboard" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            </div>
            {/* Search Bar for Desktop */}
            {searchBar}
          </div>
        </div>
      </div>

      {/* --- Mobile Navigation Bar (Uses Tailwind 'md:hidden') --- */}
      <div className="md:hidden"> {/* Shows only on screens smaller than md */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Button */}
              <div className="flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  )}
                </button>
              </div>
               {/* Search Bar for Mobile */}
               {searchBar}
            </div>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown (Uses state + Tailwind 'md:hidden') --- */}
      {/* Renders only when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu"> {/* Also hidden on medium+ screens */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-800">
            {/* Mobile Links */}
            <Link href="/" className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Home</Link>
            <Link href="/services" className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Services</Link>
            <Link href="/announcements" className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Announcements</Link>
            <Link href="/resident" className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Resident Profile</Link>
            <Link href="/dashboard" className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeMobileMenu}>Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;