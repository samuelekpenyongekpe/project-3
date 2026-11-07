import React from 'react';
import { ArrowRight, Utensils, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onExplore: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExplore }) => {
  return (
    <section className="cta-banner-section">
      <div className="container-custom">
        <div className="cta-banner-card">
          {/* Subtle Watermark SVGs */}
          <div className="cta-watermark-left" aria-hidden="true">
            <Utensils className="w-full h-full" />
          </div>
          <div className="cta-watermark-right" aria-hidden="true">
            <Sparkles className="w-full h-full" />
          </div>

          <h2 className="cta-headline">Ready to cook smarter?</h2>
          <p className="cta-subtext">
            Discover recipes that fit your life and make healthy eating second
            nature. No complicated pantry shopping, no long hours over the stove.
          </p>
          <button onClick={onExplore} className="btn-cta-banner">
            <span>Explore recipes now</span>
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};
