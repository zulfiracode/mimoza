import React from 'react';

type DividerVariant = 'wave' | 'curve' | 'slant' | 'layered-wave' | 'peaks' | 'ornament';

interface SectionDividerProps {
  variant?: DividerVariant;
  fillColor?: string; // Tailwind fill class or hex
  className?: string;
  flip?: boolean;
  inverted?: boolean;
  accentText?: string;
  accentIcon?: React.ReactNode;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  fillColor = 'text-white',
  className = '',
  flip = false,
  inverted = false,
  accentText,
  accentIcon,
}) => {
  if (variant === 'ornament') {
    return (
      <div className={`relative py-6 flex items-center justify-center overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-300/80 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        {(accentText || accentIcon) && (
          <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700">
            {accentIcon && <span className="text-cyan-600">{accentIcon}</span>}
            {accentText && <span>{accentText}</span>}
          </div>
        )}
      </div>
    );
  }

  const transformStyle = `${flip ? 'scale-x-[-1] ' : ''}${inverted ? 'scale-y-[-1] ' : ''}`.trim();

  return (
    <div 
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      {variant === 'wave' && (
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-8 sm:h-12 md:h-16 lg:h-20 ${fillColor}`}
          preserveAspectRatio="none"
          style={{ transform: transformStyle || undefined }}
        >
          <path
            d="M0,35 C320,70 480,0 800,45 C1120,90 1280,10 1440,35 L1440,70 L0,70 Z"
            fill="currentColor"
          />
        </svg>
      )}

      {variant === 'curve' && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-6 sm:h-10 md:h-14 ${fillColor}`}
          preserveAspectRatio="none"
          style={{ transform: transformStyle || undefined }}
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      )}

      {variant === 'slant' && (
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-6 sm:h-10 md:h-12 ${fillColor}`}
          preserveAspectRatio="none"
          style={{ transform: transformStyle || undefined }}
        >
          <polygon
            points="0,50 1440,0 1440,50"
            fill="currentColor"
          />
        </svg>
      )}

      {variant === 'layered-wave' && (
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-8 sm:h-14 md:h-18 ${fillColor}`}
          preserveAspectRatio="none"
          style={{ transform: transformStyle || undefined }}
        >
          <path
            opacity="0.4"
            d="M0,40 C360,10 720,70 1080,20 C1240,-2 1380,45 1440,50 L1440,80 L0,80 Z"
            fill="currentColor"
          />
          <path
            d="M0,55 C240,25 600,75 960,35 C1200,10 1360,50 1440,55 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      )}

      {variant === 'peaks' && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-6 sm:h-10 md:h-14 ${fillColor}`}
          preserveAspectRatio="none"
          style={{ transform: transformStyle || undefined }}
        >
          <polygon
            points="0,60 720,10 1440,60"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};
