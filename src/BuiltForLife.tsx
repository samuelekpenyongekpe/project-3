import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

export const BuiltForLife: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="built-for-life-section" id="about-preview">
      <div className="container-custom">
        <div className="built-for-life-split">
          {/* Left Text Block */}
          <div className="built-content">
            <h2>Built for real life</h2>
            <p>
              Cooking shouldn't be complicated. These recipes come in under{' '}
              <span className="built-highlight-marker">30 minutes</span> of
              active time, fit busy schedules, and taste good enough to repeat.
            </p>
            <p>
              Whether you're new to the kitchen or just need fresh ideas, we've
              got you covered.
            </p>
          </div>

          {/* Right Image Frame */}
          <div className="built-media-frame">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
                alt="Hands slicing crisp fresh vegetables on a rustic wooden cutting board"
                className="built-media-img"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="built-media-img flex flex-col items-center justify-center text-center p-6"
                style={{
                  background:
                    'linear-gradient(135deg, #f5f2eb 0%, #e8f5ef 100%)',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-900 mb-2 shadow-sm">
                  <ChefHat className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-emerald-950">
                  Real Meals in Under 30 Minutes
                </h4>
                <p className="text-xs text-emerald-800 mt-1">
                  Tested and timed for everyday busy schedules.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
