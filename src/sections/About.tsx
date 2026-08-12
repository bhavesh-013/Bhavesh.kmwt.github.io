import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <SectionLabel
        number="01"
        title="HELLO!"
        annotation="A little about who I am"
      />

      {/* Main Scrapbook Composition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
        {/* Taped Photo Card Column (5 cols) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative rotate-n2 transition-transform hover:rotate-0 duration-300">
            {/* Masking tape on photo corners */}
            <Tape width="80px" rotation="-6deg" className="-top-4 -left-4 z-20" />
            <Tape width="80px" rotation="4deg" className="-bottom-3 -right-4 z-20" />

            {/* Photo Card Frame */}
            <div className="paper-card p-4 bg-[#FAF8F5] border-2 border-[#242424] shadow-xl max-w-sm w-full">
              {/* Photo Area with Polaroid styling */}
              <div className="bg-[#242424] p-4 text-[#F3F0E8] aspect-4/5 flex flex-col items-center justify-between relative overflow-hidden rounded-2xs border border-[#3D3D3D]">
                {/* Visual Avatar Artwork Frame */}
                <div className="my-auto text-center space-y-3">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#82A775] border-2 border-white flex items-center justify-center font-display text-4xl font-black text-[#242424] shadow-md">
                    BK
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg text-white block">
                      BHAVESH KUMAWAT
                    </span>
                    <span className="text-xs font-mono text-[#82A775] block mt-0.5">
                      @bhavesh-kumawat
                    </span>
                  </div>
                </div>

                <div className="w-full pt-2 border-t border-gray-700 flex justify-between items-center text-[10px] font-mono text-gray-400">
                  <span>RAJ SAMAND, RAJASTHAN</span>
                  <span>B.TECH CS '29</span>
                </div>
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="pt-3 text-center">
                <span className="font-handwriting text-2xl text-[#242424] font-bold block">
                  "Hi, I'm Bhavesh."
                </span>
                <span className="text-[10px] font-mono text-[#5E5B52] block uppercase tracking-wider">
                  FRONTEND DEVELOPER & CS STUDENT
                </span>
              </div>
            </div>

            {/* Handwritten callout sticky note attached to photo */}
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#E4EEDC] border border-[#82A775] p-2.5 rounded-xs rotate-3 shadow-md z-30 max-w-[170px]">
              <span className="font-handwriting text-base text-[#242424] font-bold block leading-tight">
                Built with React, JS & custom CSS! 🎨
              </span>
            </div>
          </div>
        </div>

        {/* Story & CV Text Breakdown Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Statement Card */}
          <div className="paper-card p-6 sm:p-8 bg-[#FAF8F5] border-2 border-[#242424] shadow-md relative">
            <Tape width="90px" rotation="2deg" className="-top-3 right-6" />

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#242424] mb-4">
              Computer Science undergraduate building software solutions for the web.
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#5E5B52] leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>
          </div>

          {/* Visually Broken Bio Checklist (from user prompt) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PERSONAL_INFO.aboutPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#EAE5D9] border border-[#DCD6C8] rounded-xs font-display font-bold text-xs sm:text-sm text-[#242424] flex items-center gap-2.5 shadow-2xs hover:bg-[#E4EEDC] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#82A775] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
