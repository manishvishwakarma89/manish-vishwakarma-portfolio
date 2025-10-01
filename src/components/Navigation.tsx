import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-hero/95 backdrop-blur-sm shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="nav"
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold"
          >
            Portfolio
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="nav" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="nav"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-hero/95 backdrop-blur-sm rounded-lg mt-2 p-4 space-y-2 animate-slide-up">
            <Button
              variant="nav"
              onClick={() => scrollToSection('portfolio')}
              className="w-full justify-start"
            >
              Portfolio
            </Button>
            <Button
              variant="nav"
              onClick={() => scrollToSection('about')}
              className="w-full justify-start"
            >
              About
            </Button>
            <Button
              variant="nav"
              onClick={() => scrollToSection('contact')}
              className="w-full justify-start"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;