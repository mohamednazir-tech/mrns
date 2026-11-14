import React, { useState, useRef, useCallback } from 'react';
import {
  Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink,
  Video as VideoIcon,
} from 'lucide-react';
import { useVideoAutoplay } from '../hooks/useVideoAutoplay';

interface ProjectVideoPlayerProps {
  videoSrc?: string;
  poster?: string;
  title: string;
  liveUrl: string;
  displayUrl: string;
  category: string;
  brandTheme: {
    gradient: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
  };
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  videoSrc,
  poster,
  title,
  liveUrl,
  displayUrl,
  category,
  brandTheme,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // start muted for autoplay compatibility
  const [progress, setProgress] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Autoplay on visibility ───────────────────────────────────────────────
  const { markUserPaused, markUserResumed } = useVideoAutoplay(
    containerRef,
    videoRef,
    hasVideoError || !videoSrc
  );

  // ── Playback controls ────────────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasVideoError) return;

    if (video.paused) {
      markUserResumed();
      video.play().catch(() => setIsPlaying(false));
    } else {
      markUserPaused();
      video.pause();
    }
  }, [hasVideoError, markUserPaused, markUserResumed]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration > 0) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  }, []);

  const toggleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }, []);

  const handleOpenLive = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  }, [liveUrl]);

  const handleVideoPlay = useCallback(() => setIsPlaying(true), []);
  const handleVideoPause = useCallback(() => setIsPlaying(false), []);
  const handleVideoError = useCallback(() => setHasVideoError(true), []);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-glow-brand"
    >
      {/* ── BROWSER CHROME TOP BAR ───────────────────────────────── */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/40" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
        </div>

        {/* Address Bar */}
        <div
          onClick={handleOpenLive}
          className="flex-1 max-w-sm mx-3 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 font-mono text-[11px] flex items-center justify-between cursor-pointer hover:border-slate-700 hover:text-slate-200 transition-colors"
          title="Click to visit live website in new tab"
        >
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="truncate">{displayUrl}</span>
          </div>
          <ExternalLink className="w-3 h-3 shrink-0 text-slate-500 hover:text-brand-cyan" />
        </div>

        <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
          1080p WebGL
        </div>
      </div>

      {/* ── VIDEO / MOCKUP VIEWPORT ──────────────────────────────── */}
      <div
        onClick={togglePlay}
        className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center cursor-pointer"
      >
        {/* Real video when src is provided and hasn't errored */}
        {videoSrc && !hasVideoError ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              playsInline
              loop
              muted={isMuted}
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onError={handleVideoError}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              className="w-full h-full object-contain bg-slate-950"
            />

            {/* Play/Pause Centre Overlay */}
            {(!isPlaying || isHovering) && (
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-200">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying
                    ? <Pause className="w-7 h-7 fill-white" />
                    : <Play className="w-7 h-7 fill-white ml-1" />
                  }
                </button>
              </div>
            )}

            {/* Bottom Floating Video Controls */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-200 ${
                isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Progress bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full mb-3 overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <button onClick={togglePlay} className="p-1 hover:text-brand-cyan" aria-label={isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button onClick={toggleMute} className="p-1 hover:text-brand-cyan" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">{title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenLive}
                    className="flex items-center gap-1 text-[11px] font-mono text-brand-cyan hover:underline mr-1"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button onClick={toggleFullscreen} className="p-1 hover:text-brand-cyan" aria-label="Fullscreen">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ── CINEMATIC PLACEHOLDER (screen recording not provided) ── */
          <div
            onClick={handleOpenLive}
            className={`w-full h-full p-8 flex flex-col justify-between relative bg-gradient-to-br ${brandTheme.gradient} text-white cursor-pointer select-none`}
          >
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${brandTheme.badgeBg} ${brandTheme.badgeText} border border-white/20`}>
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live on Production
              </span>
            </div>

            {/* Center Content */}
            <div className="relative z-10 text-center space-y-3 max-w-md mx-auto">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {title}
                </h4>
                <p className="text-xs text-white/80 font-mono">
                  {displayUrl}
                </p>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-300/30">
                [Screen Recording Upload Awaited — Click to Launch Live Website]
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/70 pt-2 border-t border-white/15">
              <span>Interactive Portfolio Preview</span>
              <span className="flex items-center gap-1 text-white font-bold group-hover:text-amber-300 transition-colors">
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectVideoPlayer;
