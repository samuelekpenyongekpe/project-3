import React, { useState } from 'react';
import { Menu, X, Bookmark, Utensils } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'recipes' | 'about';
  onNavigate: (tab: 'home' | 'recipes' | 'about') => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  savedCount,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'recipes' | 'about') => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-custom">
        <div className="header-inner">
          {/* Brand Logo Lockup */}
          <button
            onClick={() => handleNavClick('home')}
            className="brand-lockup"
            aria-label="Healthy Recipe Finder Home"
          >
            {/* Custom Organic Sprout / Leaf SVG Icon matching the design */}
            <svg
              className="brand-icon-leaf"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16 3C16 3 9 7.5 9 16C9 20.97 12.5 25.5 16 29C19.5 25.5 23 20.97 23 16C23 7.5 16 3 16 3Z"
                fill="#12382B"
              />
              <path
                d="M16 8C16 8 20 12 19 18C18.2 22.8 16 26 16 26C16 26 13.8 22.8 13 18C12 12 16 8 16 8Z"
                fill="#F7D6C4"
              />
              <path
                d="M16 12V24"
                stroke="#12382B"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <span>Healthy Recipe Finder</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('recipes')}
              className={`nav-link ${activeTab === 'recipes' ? 'active' : ''}`}
            >
              Recipes
            </button>
            {savedCount > 0 && (
              <button
                onClick={onOpenSaved}
                className="nav-link flex items-center gap-1.5"
                title="View Saved Recipes"
              >
                <Bookmark className="w-4 h-4 text-emerald-800 fill-emerald-800" />
                <span>Saved ({savedCount})</span>
              </button>
            )}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('recipes')}
              className="btn-header-cta"
            >
              Browse recipes
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-mobile-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`mobile-nav-link text-left ${activeTab === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`mobile-nav-link text-left ${activeTab === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('recipes')}
              className={`mobile-nav-link text-left ${activeTab === 'recipes' ? 'active' : ''}`}
            >
              Recipes
            </button>
            {savedCount > 0 && (
              <button
                onClick={() => {
                  onOpenSaved();
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-link text-left flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4 text-emerald-800 fill-emerald-800" />
                <span>Saved Recipes ({savedCount})</span>
              </button>
            )}
          </nav>
          <button
            onClick={() => handleNavClick('recipes')}
            className="btn-header-cta w-full"
          >
            Browse recipes
          </button>
        </div>
      )}
    </header>
  );
};
