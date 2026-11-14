import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'image' | 'vector';
  linkToHome?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-all group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white/60 p-1 border border-slate-200/60 shadow-sm group-hover:shadow-md transition-shadow">
        <img 
          src="/mrns-logo.jpg" 
          alt="MRNS Logo - Modern, Reliable Networked Solution" 
          className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
          loading="eager"
        />
      </div>
      
      {showTagline && size !== 'sm' && (
        <div className="hidden lg:flex flex-col justify-center border-l border-slate-200/80 pl-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-mono">Enterprise Solution</span>
          <span className="text-xs font-semibold text-slate-700 tracking-tight">Modern • Reliable • Networked</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
