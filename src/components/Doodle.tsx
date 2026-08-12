import React from 'react';

export type DoodleType =
  | 'arrow-curved'
  | 'arrow-straight'
  | 'arrow-down'
  | 'circle'
  | 'underline'
  | 'squiggle'
  | 'star'
  | 'spark'
  | 'database-schema'
  | 'pin'
  | 'leaf'
  | 'check';

interface DoodleProps {
  type: DoodleType;
  color?: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const Doodle: React.FC<DoodleProps> = ({
  type,
  color = '#82A775', // Muted green accent by default
  className = '',
  size = 48,
  strokeWidth = 2.2
}) => {
  const commonProps = {
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
    className: `inline-block pointer-events-none transition-colors duration-200 ${className}`,
    ariaHidden: true
  };

  switch (type) {
    case 'arrow-curved':
      return (
        <svg width={size * 1.5} height={size} viewBox="0 0 100 60" {...commonProps}>
          <path d="M10 50 C 30 10, 70 10, 85 40" />
          <path d="M72 32 L 86 42 L 88 26" />
        </svg>
      );

    case 'arrow-straight':
      return (
        <svg width={size * 1.4} height={size * 0.6} viewBox="0 0 80 30" {...commonProps}>
          <path d="M5 15 Q 40 12, 72 15" />
          <path d="M60 6 L 73 15 L 60 24" />
        </svg>
      );

    case 'arrow-down':
      return (
        <svg width={size * 0.8} height={size * 1.2} viewBox="0 0 40 60" {...commonProps}>
          <path d="M20 5 C 22 25, 18 40, 20 52" />
          <path d="M10 42 L 20 53 L 30 42" />
        </svg>
      );

    case 'circle':
      return (
        <svg width={size * 1.3} height={size * 1.1} viewBox="0 0 80 60" {...commonProps}>
          <path d="M 15 30 C 12 12, 65 8, 72 28 C 78 48, 22 55, 10 38 C 5 28, 20 18, 35 15" />
        </svg>
      );

    case 'underline':
      return (
        <svg width={size * 2} height={size * 0.4} viewBox="0 0 120 20" {...commonProps}>
          <path d="M 5 12 Q 35 18, 65 10 T 115 14" />
          <path d="M 12 16 Q 45 19, 95 13" strokeWidth={strokeWidth * 0.7} opacity={0.7} />
        </svg>
      );

    case 'squiggle':
      return (
        <svg width={size * 1.8} height={size * 0.5} viewBox="0 0 100 25" {...commonProps}>
          <path d="M 5 15 Q 15 2, 25 15 T 45 15 T 65 15 T 85 15 T 95 15" />
        </svg>
      );

    case 'star':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" {...commonProps}>
          <path d="M20 3 Q 20 18, 5 20 Q 20 20, 20 37 Q 20 20, 35 20 Q 20 20, 20 3" />
        </svg>
      );

    case 'spark':
      return (
        <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 30 30" {...commonProps}>
          <path d="M15 2 L15 28 M2 15 L28 15 M6 6 L24 24 M24 6 L6 24" strokeWidth={strokeWidth * 0.8} />
        </svg>
      );

    case 'database-schema':
      return (
        <svg width={size * 1.5} height={size * 1.2} viewBox="0 0 90 70" {...commonProps}>
          {/* Main DB Cylinder */}
          <ellipse cx="25" cy="15" rx="18" ry="7" />
          <path d="M 7 15 L 7 35 C 7 42, 43 42, 43 35 L 43 15" />
          <ellipse cx="25" cy="25" rx="18" ry="6" opacity={0.5} />
          {/* Relation Line */}
          <path d="M 43 25 Q 60 25, 65 42" strokeDasharray="3 3" />
          {/* Secondary Table Box */}
          <rect x="52" y="42" width="32" height="22" rx="2" strokeWidth={strokeWidth * 0.8} />
          <line x1="52" y1="50" x2="84" y2="50" strokeWidth={strokeWidth * 0.7} />
        </svg>
      );

    case 'pin':
      return (
        <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 30 30" {...commonProps}>
          <circle cx="15" cy="10" r="6" fill={color} />
          <path d="M 15 16 L 15 27" strokeWidth={strokeWidth * 1.2} />
        </svg>
      );

    case 'leaf':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" {...commonProps}>
          <path d="M 8 32 C 8 32, 10 12, 32 8 C 32 8, 30 28, 8 32 Z" fill={`${color}22`} />
          <path d="M 8 32 Q 20 20, 32 8" />
        </svg>
      );

    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 30 30" {...commonProps}>
          <path d="M 5 16 L 12 23 L 26 7" strokeWidth={strokeWidth * 1.2} />
        </svg>
      );

    default:
      return null;
  }
};

export default Doodle;
