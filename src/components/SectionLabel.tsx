import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
  annotation?: string;
  className?: string;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  title,
  annotation,
  className = '',
  dark = false
}) => {
  return (
    <div className={`relative inline-block mb-8 sm:mb-12 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
        {/* Number Badge */}
        <span
          className={`font-display font-bold text-xs sm:text-sm tracking-widest px-2.5 py-1 ${
            dark
              ? 'bg-[#82A775] text-[#242424]'
              : 'bg-[#242424] text-[#F3F0E8]'
          } rotate-n2 shadow-sm inline-block`}
        >
          {number}
        </span>

        {/* Title */}
        <h2
          className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase ${
            dark ? 'text-[#F3F0E8]' : 'text-[#242424]'
          }`}
        >
          {title}
        </h2>
      </div>

      {/* Handwritten Annotation */}
      {annotation && (
        <div className="mt-2 ml-10 sm:ml-16 flex items-center gap-2">
          <span className="font-handwriting text-xl sm:text-2xl text-[#82A775] font-semibold -rotate-1 inline-block">
            {annotation}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionLabel;
