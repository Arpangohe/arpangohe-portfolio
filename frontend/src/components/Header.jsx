import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-20 max-w-6xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#39FF14] flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
              AG
            </div>
            <span className="text-xl font-bold text-white hidden md:block">
              Arpan Gohe
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-300 hover:text-[#00D4FF] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-[#1F1F23] border border-white/10 flex items-center justify-center text-white hover:border-[#00D4FF]/50 transition-all"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1F1F23]/95 backdrop-blur-md border-t border-white/10">
          <nav className="container px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block text-gray-300 hover:text-[#00D4FF] transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] text-black font-semibold py-3 rounded-xl"
            >
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
