import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];
    
    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href={`${import.meta.env.BASE_URL}#hero`} className="text-2xl font-bold text-primary tracking-tighter" data-testid="nav-logo">
          AS
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={`${import.meta.env.BASE_URL}${link.href}`}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <ThemeToggle testId="theme-toggle" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle testId="theme-toggle-mobile" />
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 md:hidden"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={`${import.meta.env.BASE_URL}${link.href}`}
                    data-testid={`nav-link-mobile-${link.name.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
