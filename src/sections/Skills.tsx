import React from 'react';
import SectionLabel from '../components/SectionLabel';
import SkillTag from '../components/SkillTag';
import Tape from '../components/Tape';
import Doodle from '../components/Doodle';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <SectionLabel
        number="03"
        title="WHAT I WORK WITH"
        annotation="A visual developer toolbox"
      />

      {/* Developer Toolbox Notebook Container */}
      <div className="paper-card p-6 sm:p-10 bg-[#FAF8F5] border-2 border-[#242424] shadow-xl rounded-xs relative">
        <Tape width="100px" rotation="-2deg" className="-top-3 left-10" />
        <Tape width="100px" rotation="2deg" className="-top-3 right-10" />

        {/* Toolbox Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const rotations = ['rotate-n1', 'rotate-p1', 'rotate-n2', 'rotate-p2', 'rotate-n1'];
            const rotClass = rotations[idx % rotations.length];

            return (
              <div
                key={cat.title}
                className={`p-5 bg-[#EAE5D9] border border-[#DCD6C8] rounded-xs shadow-2xs relative ${rotClass} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Category Header Tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCD6C8]">
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-[#242424] tracking-wider uppercase flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span>{cat.title}</span>
                  </h3>
                  <span className="font-handwriting text-sm text-[#82A775] font-bold">
                    [{cat.items.length} skills]
                  </span>
                </div>

                {/* Skill Sticker / Paper Tag Cluster */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => {
                    const itemRotations = ['-1deg', '1deg', '-2deg', '2deg', '0deg'];
                    const itemRot = itemRotations[itemIdx % itemRotations.length];

                    return (
                      <SkillTag
                        key={item.name}
                        name={item.name}
                        tag={item.tag}
                        highlight={item.highlight}
                        color={cat.color}
                        rotation={itemRot}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toolbox Bottom Handwritten Note */}
        <div className="mt-8 pt-4 border-t border-[#DCD6C8] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Doodle type="spark" size={20} color="#82A775" />
            <span className="font-handwriting text-lg text-[#242424] font-bold">
              Continuously learning & adding tools through real-world projects.
            </span>
          </div>

          <span className="font-mono text-xs text-[#5E5B52]">
            PREFER CLEAN JS, CSS & ACCESSIBLE HTML
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
