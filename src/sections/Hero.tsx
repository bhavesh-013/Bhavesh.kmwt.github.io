import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';

interface HeroProps {
  onScrollToExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToExplore }) => {
  return (
    <section
      id="hero"
      className="min-h-[85vh] sm:min-h-0 pt-24 sm:pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-between relative overflow-hidden"
    >
      {/* Decorative Taped Paper Card Cover Badge (Top-Right) */}
      <div className="absolute top-20 right-4 sm:right-8 hidden md:block rotate-p2 z-10">
        <div className="paper-card p-3 bg-[#FAF8F5] border border-[#DCD6C8] shadow-md text-center max-w-[140px]">
          <Tape width="55px" rotation="-4deg" className="-top-3 left-1/2 -translate-x-1/2" />
          <span className="font-display font-extrabold text-[11px] text-[#242424] block tracking-widest">
            EST. 2026
          </span>
          <span className="font-handwriting text-xs text-[#82A775] font-bold block mt-0.5">
            Vol. 01 — Portfolio
          </span>
        </div>
      </div>

      {/* Main Editorial Typography Container */}
      <div className="relative z-10 my-auto py-4 sm:py-6">
        {/* Editorial Top Marks */}
        <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
          <span className="font-display font-bold text-[11px] sm:text-xs px-2.5 py-1 bg-[#242424] text-[#F3F0E8] rotate-n1 shadow-xs">
            PORTFOLIO 2026
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-[#5E5B52] tracking-wider uppercase">
            PW INSTITUTE OF INNOVATION
          </span>
          <Doodle type="spark" size={16} color="#82A775" />
        </div>

        {/* Refined Editorial Name Heading */}
        <div className="relative max-w-3xl">
          <h1
            className="font-display font-extrabold text-[#242424] uppercase tracking-tighter"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 6.25rem)',
              lineHeight: '0.85',
              letterSpacing: '-0.04em'
            }}
          >
            <div>{PERSONAL_INFO.firstName}</div>
            <div className="ml-3 sm:ml-8">{PERSONAL_INFO.lastName}</div>
          </h1>

          {/* Handwritten "frontend developer" label closer beneath the name */}
          <div className="mt-2.5 sm:mt-3.5 ml-3 sm:ml-8 flex items-center gap-2">
            <div className="relative -rotate-2">
              <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-[#82A775] font-bold underline decoration-[#82A775] decoration-2">
                "{PERSONAL_INFO.role.toLowerCase()}"
              </span>
              <Doodle type="circle" size={40} color="#82A775" className="-top-2 -left-2 absolute" />
            </div>
          </div>
        </div>

        {/* Tagline & Subtext */}
        <div className="mt-6 sm:mt-8 max-w-xl ml-1 sm:ml-4 relative">
          <Doodle type="arrow-curved" size={36} color="#82A775" className="-left-10 top-0 hidden sm:block absolute" />
          <p className="font-sans text-base sm:text-xl font-medium text-[#242424] leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="font-handwriting text-lg sm:text-xl text-[#5E5B52] mt-1.5 font-semibold">
            Designing clean layouts, resilient frontend apps, & database architectures.
          </p>
        </div>

        {/* Supporting Skill Labels */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl">
          {PERSONAL_INFO.editorialPills.map((label, idx) => (
            <div
              key={idx}
              className={`p-2.5 bg-[#FAF8F5] border border-[#DCD6C8] shadow-2xs font-display font-bold text-[11px] sm:text-xs tracking-wider text-[#242424] flex items-center justify-between transition-transform hover:-translate-y-0.5 ${
                idx % 2 === 0 ? 'rotate-n1' : 'rotate-p1'
              }`}
            >
              <span>{label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#82A775]" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Bottom Scroll Action */}
      <div className="pt-4 sm:pt-6 border-t border-[#DCD6C8]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative">
        <div className="flex items-center gap-2">
          <span className="font-handwriting text-lg sm:text-xl text-[#82A775] font-bold">
            Handcrafted with code & paper grain
          </span>
        </div>

        <button
          onClick={onScrollToExplore}
          className="group flex items-center gap-2 font-display font-bold text-xs tracking-widest text-[#242424] hover:text-[#82A775] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="p-1.5 rounded-full bg-[#242424] text-[#F3F0E8] group-hover:bg-[#82A775] group-hover:text-[#242424] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
