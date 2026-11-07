import React from 'react';
import { Leaf, Clock, Heart, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container-custom">
        <div className="about-grid">
          <div className="about-prose">
            <h2>Our Whole-Food Philosophy</h2>
            <p>
              We believe everyday healthy cooking shouldn't feel like an endurance test. 
              Too many recipe platforms overwhelm you with 40-step instructions, rare 
              ingredients you will only use once, and unverified cooking times.
            </p>
            <p>
              <strong>Healthy Recipe Finder</strong> focuses purely on 
              approachable, nutrient-dense meals made from genuine whole foods: fresh 
              produce, legumes, lean proteins, nuts, and hearty unrefined grains.
            </p>
            <p>
              Every single recipe in this catalog is rigorously tested to ensure active prep 
              and cook times stay under 30 minutes, with zero processed additives.
            </p>
          </div>

          <div className="about-stats-card">
            <div className="about-stat-item">
              <h4>8</h4>
              <p>Hand-crafted whole-food recipes</p>
            </div>
            <div className="about-stat-item">
              <h4>&lt; 30m</h4>
              <p>Active prep & cook time on every dish</p>
            </div>
            <div className="about-stat-item">
              <h4>100%</h4>
              <p>Unprocessed, everyday ingredients</p>
            </div>
            <div className="about-stat-item">
              <h4>0</h4>
              <p>Preservatives, guesswork, or culinary stress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
