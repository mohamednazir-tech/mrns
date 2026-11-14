import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause, Smartphone, 
  Sparkles, Layers, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export interface MobileScreenshot {
  src: string;
  caption: string;
  description?: string;
}

interface ProjectMobileShowcaseProps {
  screenshots: MobileScreenshot[];
  title: string;
  category: string;
  brandTheme: {
    gradient: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
  };
}

export const ProjectMobileShowcase: React.FC<ProjectMobileShowcaseProps> = ({
  screenshots,
  title,
  category,
  brandTheme,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const total = screenshots.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // ── Auto-advance timer ───────────────────────────────────────────────────
  useEffect(() => {
    if (!isAutoPlaying || isHovered || total <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, total, goToNext]);

  // ── Touch swipe handlers for mobile ──────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 50; // minimum 50px swipe

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // ── Keyboard accessibility ───────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const activeScreenshot = screenshots[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${title} screenshot showcase`}
      className="group relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-glow-brand flex flex-col focus:outline-none focus:ring-1 focus:ring-brand-purple/50"
    >
      {/* ── TOP MOBILE APP BAR ─────────────────────────────────────── */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/40" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
        </div>

        {/* Center Title Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px] truncate max-w-[200px] sm:max-w-xs">
          <Smartphone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="truncate">{title}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
        </div>

        {/* Play/Pause & Slide Counter */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1 rounded hover:text-white transition-colors"
            title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <span className="hidden sm:inline bg-slate-800/80 px-2 py-0.5 rounded text-[10px] text-slate-300">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ── SCREENSHOT VIEWPORT (ADAPTIVE CONTAINER, NEVER CROP) ──── */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 min-h-[460px] sm:min-h-[540px] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none"
      >
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 blur-3xl transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${brandTheme.accentColor} 0%, transparent 70%)`
          }}
        />

        {/* Smartphone Frame Mockup */}
        <div className="relative z-10 max-w-[280px] sm:max-w-[310px] w-full flex flex-col items-center">
          {/* Phone Speaker Notch */}
          <div className="w-20 h-1 bg-slate-700/80 rounded-full mb-2 shadow-inner" />

          {/* Screenshot Container - Full Original Aspect Ratio, Zero Cropping */}
          <div className="relative w-full rounded-2xl bg-black border-2 border-slate-700/90 shadow-2xl overflow-hidden p-1">
            <div className="relative w-full aspect-[716/1600] overflow-hidden rounded-xl bg-slate-950">
              {screenshots.map((s, idx) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.caption || `${title} screenshot ${idx + 1}`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                    idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Left & Right Navigation Buttons */}
        <button
          onClick={goToPrev}
          aria-label="Previous screenshot"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/80 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next screenshot"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/80 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── BOTTOM CAPTION & SLIDE INDICATORS ───────────────────────── */}
      <div className="bg-slate-900/95 border-t border-slate-800 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Active Caption */}
        <div className="space-y-0.5 text-center sm:text-left truncate max-w-sm">
          <div className="text-white font-bold text-xs truncate flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span className="truncate">{activeScreenshot?.caption}</span>
          </div>
          {activeScreenshot?.description && (
            <p className="text-[11px] text-slate-400 font-mono truncate">
              {activeScreenshot.description}
            </p>
          )}
        </div>

        {/* Dot / Pill Indicators */}
        <div className="flex items-center gap-1.5">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to screenshot ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-gradient-to-r from-rose-500 to-amber-500'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobileShowcase;
