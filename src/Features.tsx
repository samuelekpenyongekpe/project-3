import React from 'react';
import { Zap, Search } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="container-custom">
        <h2 className="section-heading-center">What you’ll get</h2>

        <div className="features-grid">
          {/* Feature 1: Whole-food recipes */}
          <div className="feature-card">
            <div className="feature-icon-box peach" aria-hidden="true">
              {/* Custom Carrot SVG */}
              <svg
                className="w-6 h-6 text-amber-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15 9l4-4M18 6l3-1M18 6l1-3" />
              </svg>
            </div>
            <h3 className="feature-title">Whole-food recipes</h3>
            <p className="feature-description">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>

          {/* Feature 2: Minimum fuss */}
          <div className="feature-card">
            <div className="feature-icon-box mint" aria-hidden="true">
              <Zap className="w-6 h-6 text-emerald-800 fill-emerald-800/30" />
            </div>
            <h3 className="feature-title">Minimum fuss</h3>
            <p className="feature-description">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>

          {/* Feature 3: Search in seconds */}
          <div className="feature-card">
            <div className="feature-icon-box lavender" aria-hidden="true">
              <Search className="w-6 h-6 text-indigo-700" />
            </div>
            <h3 className="feature-title">Search in seconds</h3>
            <p className="feature-description">
              Filter by name or ingredient and jump straight to the recipe you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
