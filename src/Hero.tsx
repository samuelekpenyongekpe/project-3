import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartExploring: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartExploring }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero-section" id="hero">
      {/* Decorative organic shapes */}
      <div className="hero-bg-accent-left" aria-hidden="true" />
      <div className="hero-bg-accent-right" aria-hidden="true" />

      <div className="container-custom">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="hero-highlight-word">Healthy meals,</span>
            <br />
            zero fuss
          </h1>
          <p className="hero-subtext">
            Discover eight quick, whole-food recipes that you can cook tonight—no
            processed junk, no guesswork.
          </p>
          <button
            onClick={onStartExploring}
            className="btn-hero-primary"
            aria-label="Start exploring healthy recipes"
          >
            <span>Start exploring</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Media Preview Card */}
        <div className="hero-media-wrapper">
          <div className="hero-media-frame">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80"
                alt="Woman preparing fresh vegetables in a clean, sunlit kitchen"
                className="hero-media-img"
                loading="eager"
                onError={() => setImgError(true)}
              />
            ) : (
              /* High-fidelity SVG illustration fallback if network is restricted */
              <div
                className="hero-media-img flex flex-col items-center justify-center text-center p-8"
                style={{
                  background:
                    'linear-gradient(135deg, #eaf3ee 0%, #d8ebd2 50%, #f7d6c4 100%)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/80 shadow-md flex items-center justify-center text-emerald-900 mb-3">
                  <Sparkles className="w-8 h-8 text-emerald-900" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-1">
                  Fresh, Wholesome Ingredients Daily
                </h3>
                <p className="text-sm text-emerald-800 max-w-md">
                  Clean, unprocessed whole foods prepared with simplicity and culinary joy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
