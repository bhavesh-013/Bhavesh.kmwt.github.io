import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <div className="paper-card p-6 sm:p-8 bg-[#E4EEDC] border-2 border-[#242424] shadow-lg rounded-xs relative rotate-p1">
        <Tape width="90px" rotation="-2deg" className="-top-3 left-1/2 -translate-x-1/2" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#82A775]">
          <div>
            <span className="font-mono text-xs font-bold text-[#242424] uppercase tracking-widest block">
              EXPERIMENTAL SKETCHPAD
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#242424]">
              CURRENTLY EXPLORING
            </h3>
          </div>

          <Doodle type="spark" size={32} color="#242424" />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CURRENTLY_EXPLORING.map((quote, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#FAF8F5] border border-[#242424] rounded-xs shadow-2xs font-handwriting text-xl text-[#242424] font-bold flex items-center gap-2"
            >
              <span className="text-[#82A775] text-2xl font-black">“</span>
              <span>{quote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
