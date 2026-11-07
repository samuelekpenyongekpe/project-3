import React from 'react';
import { ArrowUp, Instagram, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-lockup">
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
              </svg>
              <span>Healthy Recipe Finder</span>
            </div>
            <p>Wholesome, nourishing meals designed for real-life everyday cooking.</p>
          </div>

          <div className="footer-social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            {/* TikTok Icon */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.86-4.46V8.78a8.2 8.2 0 0 0 4.77 1.48v-3.57Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> and wholesome ingredients.
          </p>
          <button
            onClick={scrollToTop}
            className="btn-back-to-top"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
