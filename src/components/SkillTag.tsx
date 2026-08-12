import React from 'react';

interface SkillTagProps {
  name: string;
  tag?: string;
  highlight?: boolean;
  color?: string;
  rotation?: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({
  name,
  tag,
  highlight = false,
  color = '#82A775',
  rotation = '0deg'
}) => {
  return (
    <div
      className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs transition-all duration-200 cursor-default ${
        highlight
          ? 'bg-[#FAF8F5] text-[#242424] border-2 border-[#242424] shadow-sm font-semibold hover:-translate-y-1 hover:shadow-md'
          : 'bg-[#EAE5D9] text-[#242424] border border-[#DCD6C8] hover:bg-[#FAF8F5] hover:border-[#82A775] hover:-translate-y-0.5'
      }`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Small dot or tag badge */}
      {highlight && (
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      )}

      <span className="font-sans text-xs sm:text-sm font-medium tracking-wide">
        {name}
      </span>

      {tag && (
        <span
          className="text-[10px] font-handwriting px-1.5 py-0.5 rounded-xs font-bold text-[#242424]"
          style={{ backgroundColor: `${color}30` }}
        >
          {tag}
        </span>
      )}
    </div>
  );
};

export default SkillTag;
