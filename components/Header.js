"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignOutButton, useUser } from '@clerk/nextjs';

const AnimatedNavLink = ({ href, children }) => {
  const defaultTextColor = 'text-gray-300';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-sm';

  return (
    <a href={href} className={`group relative inline-block h-5 flex items-center ${textSizeClass} font-normal`} style={{ minWidth: '80px', textShadow: 'none' }}>
      <span className={`transition-colors duration-200 ${defaultTextColor} group-hover:opacity-0`} style={{ textShadow: 'none' }}>{children}</span>
      <span className={`absolute left-0 top-0 w-full transition-colors duration-200 ${hoverTextColor} opacity-0 group-hover:opacity-100 font-semibold`} style={{ pointerEvents: 'none', textShadow: 'none' }}>{children}</span>
    </a>
  );
};

export function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const userButtonRef = useRef(null);

  // Removed dropdownRef and useEffect for click outside

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <a href="#home" className="flex items-center justify-center w-12 h-12 mr-4">
      <Image
        src="/images/flashbar.png"
        alt="Flashbar logo"
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
        priority
      />
    </a>
  );

  const navLinksData = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Problem', href: '#problem' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const loginButtonElement = (
    <SignInButton mode="modal">
      <button className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto" style={{ textShadow: 'none' }}>
        LogIn
      </button>
    </SignInButton>
  );

  const signupButtonElement = (
    <SignUpButton mode="modal">
      <div className="relative group w-full sm:w-auto">
        <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-gray-100 opacity-20 filter blur-sm pointer-events-none transition-all duration-300 ease-out group-hover:opacity-40 group-hover:blur-md group-hover:-m-2.5"></div>
        <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto" style={{ textShadow: 'none' }}>
          Signup
        </button>
      </div>
    </SignUpButton>
  );

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}>
      <style jsx global>{`
        header * {
          text-shadow: none !important;
        }
      `}</style>
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        {logoElement}
        <nav className="hidden sm:flex items-center justify-center gap-8 text-sm w-full">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <SignedOut>
            {loginButtonElement}
            {signupButtonElement}
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-2 relative">
              <div className="w-8 h-8 bg-[#C0EA00] rounded-full flex items-center justify-center">
                <span className="text-[#23232a] font-bold text-sm">
                  {user?.firstName?.charAt(0).toUpperCase()}
                </span>
              </div>
              <button
                ref={userButtonRef}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none"
                style={{ textShadow: 'none' }}
                onClick={() => setShowDropdown((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={showDropdown}
              >
                {user?.firstName || user?.username || user?.email}
              </button>
              {showDropdown && (
                <div
                  className="absolute right-0 top-10 bg-[#1f1f1f] border border-[#333] rounded-lg shadow-lg py-2 px-4 z-50 min-w-[120px]"
                >
                  <SignOutButton>
                    <button
                      className="w-full text-left text-gray-300 hover:text-white py-1 px-2 transition-colors duration-200"
                      onClick={() => setShowDropdown(false)}
                    >
                      Logout
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>
          </SignedIn>
        </div>
        <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center">
              {link.label}
            </a>
          ))}
        </nav>
        <SignedOut>
          <div className="flex flex-col items-center space-y-4 mt-4 w-full">
            {loginButtonElement}
            {signupButtonElement}
          </div>
        </SignedOut>
      </div>
    </header>
  );
}

export default Navbar;
