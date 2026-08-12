import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Tape from './Tape';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'BHAVESH' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'WORK' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto relative max-w-2xl w-full transition-all duration-300 ${
          scrolled ? 'scale-95 shadow-lg' : 'scale-100 shadow-md'
        }`}
        aria-label="Main Navigation"
      >
        {/* Taped paper navbar box */}
        <div className="paper-card bg-[#FAF8F5] border border-[#DCD6C8] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between rounded-sm relative">
          {/* Masking tape on top-left and top-right */}
          <Tape
            width="50px"
            rotation="-4deg"
            className="-top-3 left-6 hidden sm:block opacity-90"
          />
          <Tape
            width="50px"
            rotation="3deg"
            className="-top-3 right-6 hidden sm:block opacity-90"
          />

          {/* Brand Logo / Name */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="font-display font-bold text-base sm:text-lg tracking-wider text-[#242424] hover:text-[#82A775] transition-colors flex items-center gap-2 text-left"
          >
            <span className="w-2 h-2 rounded-full bg-[#82A775] inline-block animate-pulse" />
            <span>BHAVESH</span>
            <span className="font-handwriting text-xs text-[#82A775] normal-case hidden xs:inline">
              .dev
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 text-xs font-display font-bold tracking-widest text-[#5E5B52]">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative py-1 transition-colors hover:text-[#242424] flex items-center gap-1.5 ${
                      isActive ? 'text-[#242424] font-extrabold' : ''
                    }`}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#82A775]"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#82A775] -rotate-1" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Resume / Connect Quick Action */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-xs font-display font-bold px-3 py-1.5 bg-[#242424] text-[#F3F0E8] hover:bg-[#82A775] hover:text-[#242424] transition-colors rounded-xs flex items-center gap-1 shadow-xs"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#242424] hover:text-[#82A775] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 paper-card bg-[#FAF8F5] border border-[#DCD6C8] p-4 shadow-xl rounded-sm animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-3 font-display font-bold text-sm tracking-wider text-[#242424]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className={`w-full text-left py-2 px-3 flex items-center justify-between rounded-xs transition-colors ${
                        isActive
                          ? 'bg-[#E4EEDC] text-[#242424] font-extrabold'
                          : 'hover:bg-[#EAE5D9]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#82A775]" />}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#DCD6C8] flex justify-between items-center text-xs font-handwriting text-[#5E5B52]">
              <span>Bhavesh Kumawat Portfolio</span>
              <span className="text-[#82A775]">2026 Edition</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
