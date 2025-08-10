"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import Button from "./button";
import { ArrowRight, ChevronDown } from "lucide-react";

// ...existing icon components (MenuIcon, XIcon, etc.)...
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Blog" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900 dark:bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Header Content */}
        <div className="flex h-[80px] md:h-[119px] items-center justify-between py-4 md:py-[27px]">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[40px] w-[71px] md:h-[63px] md:w-[112px]"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative flex items-center text-[16px] font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.label}
                {link.label === "Services" && (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* CTA Button - Hidden on mobile */}
            <Button
              className="hidden sm:inline-flex items-center gap-2 rounded-[24px] px-4 sm:px-8 py-2 
                       text-sm sm:text-[16px] font-medium bg-white text-black hover:bg-gray-100 
                       transition-colors duration-300"
              variant="outline"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md 
                       text-gray-200 hover:text-white hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-2 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-lg px-4 py-3
                         text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-white
                         transition-colors"
                onClick={() => link.label === "Services" && setIsMenuOpen(false)}
              >
                {link.label}
                {link.label === "Services" && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="mt-4 px-4">
              <Button
                className="w-full flex items-center justify-center gap-2 rounded-[24px] 
                         bg-white text-black px-4 py-3 text-base font-medium
                         hover:bg-gray-100 transition-colors"
                variant="outline"
              >
                <span>Book An Appointment</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;