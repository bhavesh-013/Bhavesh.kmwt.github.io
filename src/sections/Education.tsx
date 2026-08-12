import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <SectionLabel
        number="02"
        title="EDUCATION"
        annotation="My academic journey & achievements"
      />

      {/* Illustrated Timeline Layout with Paper Card Notes */}
      <div className="relative mt-10 max-w-4xl mx-auto">
        {/* Hand-drawn vertical connecting line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-1 border-l-2 border-dashed border-[#82A775] z-0 hidden sm:block" />

        <div className="space-y-10 sm:space-y-12 relative z-10">
          {EDUCATION_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-center gap-6 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Card (5 cols on desktop) */}
                <div className="w-full sm:w-1/2">
                  <div
                    className={`paper-card p-6 bg-[#FAF8F5] border-2 border-[#242424] shadow-md relative ${
                      idx === 0 ? 'rotate-p1' : idx === 1 ? 'rotate-n2' : 'rotate-p1'
                    }`}
                  >
                    {/* Tape on top */}
                    <Tape
                      width="70px"
                      rotation={isEven ? '-3deg' : '3deg'}
                      className="-top-3 left-6"
                    />

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#82A775] text-[#242424]">
                        {item.period}
                      </span>
                      {item.tag && (
                        <span className="font-handwriting text-sm text-[#82A775] font-bold">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#242424]">
                      {item.degree}
                    </h3>

                    <p className="font-sans text-sm font-semibold text-[#5E5B52] mt-1">
                      {item.institution}
                    </p>

                    {item.score && (
                      <div className="mt-3 pt-2 border-t border-[#DCD6C8] flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-500">Academic Score:</span>
                        <span className="font-display font-extrabold text-base text-[#82A775]">
                          {item.score}
                        </span>
                      </div>
                    )}

                    {item.details && (
                      <p className="mt-2 text-xs text-[#5E5B52] leading-relaxed">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline Center Node Pin */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#242424] text-[#F3F0E8] border-2 border-[#82A775] font-mono text-xs font-bold shadow-sm shrink-0 z-20">
                  0{idx + 1}
                </div>

                {/* Empty Spacer Column for layout symmetry */}
                <div className="hidden sm:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
