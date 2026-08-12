import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <SectionLabel
        number="05"
        title="A FEW NUMBERS"
        annotation="Coding stats, hackathons & verified certifications"
      />

      {/* Main Sheet of Paper Container */}
      <div className="paper-card p-6 sm:p-10 bg-[#FAF8F5] border-2 border-[#242424] shadow-xl rounded-xs relative">
        <Tape width="100px" rotation="-3deg" className="-top-3 left-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Big Editorial Numbers (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#5E5B52] uppercase tracking-widest block">
              PROBLEM SOLVING LOG
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#E4EEDC] border-2 border-[#242424] rounded-xs shadow-xs relative rotate-n1 hover:rotate-0 transition-transform"
                >
                  <span className="font-editorial text-5xl sm:text-6xl font-black text-[#242424] block leading-none">
                    {stat.number}
                  </span>
                  <span className="font-display font-extrabold text-sm text-[#242424] block mt-2">
                    {stat.label}
                  </span>
                  <span className="text-xs font-sans text-[#5E5B52] block mt-0.5">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Doodle type="check" size={24} color="#82A775" />
              <span className="font-handwriting text-lg text-[#82A775] font-bold">
                200+ total algorithmic DSA problems solved across platforms.
              </span>
            </div>
          </div>

          {/* Right Column: Certifications & Hackathon Badges (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#5E5B52] uppercase tracking-widest block">
              VERIFIED CERTIFICATIONS & HACKATHONS
            </span>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#EAE5D9] border border-[#DCD6C8] hover:border-[#242424] rounded-xs flex items-center justify-between gap-3 transition-colors"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-[#242424]">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-sans text-[#5E5B52]">
                      {cert.organization}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold px-2 py-1 bg-[#242424] text-[#F3F0E8] rounded-xs shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
