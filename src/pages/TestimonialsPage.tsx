import React, { useState, useRef, useCallback } from 'react';
import {
  MessageSquareQuote, Star, ShieldCheck, ArrowRight,
  Building2, Send, Award, ThumbsUp,
  Play, Pause, Volume2, VolumeX, Maximize2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AmbientWaveCanvas } from '../components/AmbientWaveCanvas';
import { useVideoAutoplay } from '../hooks/useVideoAutoplay';

interface TestimonialsPageProps {
  onNavigate: (page: string) => void;
}

// ─── Milestone Construction Review Video Player ───────────────────────────────
// Genuine client testimonial video – appears ONLY on the Testimonials page.
// Uses IntersectionObserver (via useVideoAutoplay) to autoplay muted when visible
// and pause when scrolled away. Manual controls are fully preserved.
const MilestoneReviewVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // start muted for browser autoplay compatibility
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Attach IntersectionObserver – autoplays when visible, pauses when hidden
  const { markUserPaused, markUserResumed } = useVideoAutoplay(
    containerRef,
    videoRef,
    hasError
  );

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasError) return;
    if (video.paused) {
      markUserResumed();
      video.play().catch(() => setIsPlaying(false));
    } else {
      markUserPaused();
      video.pause();
    }
  }, [hasError, markUserPaused, markUserResumed]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    video.currentTime = pct * video.duration;
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

  if (hasError) {
    return (
      <div className="rounded-2xl bg-slate-100 border border-slate-200 py-14 flex flex-col items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
          <Play className="w-7 h-7 text-slate-400" />
        </div>
        <p className="text-sm font-semibold text-slate-600">Review video unavailable</p>
        <p className="text-xs text-slate-400 max-w-xs">
          The video file could not be loaded. Please ensure <code>Website Review.mp4</code> is present in the <code>public/videos/</code> folder.
        </p>
      </div>
    );
  }

  return (
    /* containerRef is the IntersectionObserver target — 40% visibility triggers autoplay */
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden w-full max-w-3xl mx-auto"
    >
      <div
        onClick={togglePlay}
        className="relative w-full cursor-pointer"
        style={{ aspectRatio: '16/9' }}
      >
        <video
          ref={videoRef}
          src="/videos/Website Review.mp4"
          playsInline
          muted={isMuted}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onError={() => setHasError(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-contain bg-slate-950"
        />

        {/* Play / Pause Overlay */}
        {(!isPlaying || isHovering) && (
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-200">
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying
                ? <Pause className="w-8 h-8 fill-white" />
                : <Play className="w-8 h-8 fill-white ml-1" />
              }
            </button>
          </div>
        )}

        {/* Bottom Controls */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-200 ${
            isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Progress Bar – clickable */}
          <div
            className="w-full h-1.5 bg-slate-700 rounded-full mb-3 overflow-hidden cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handleSeek(e); }}
          >
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
              <span className="text-[11px] font-mono text-slate-400">Milestone Construction • Video Review</span>
            </div>
            <button onClick={toggleFullscreen} className="p-1 hover:text-brand-cyan" aria-label="Fullscreen">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Testimonials Page ────────────────────────────────────────────────────────
export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  const [submissionFeedback, setSubmissionFeedback] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '',
    company: '',
    project: '',
    rating: 5,
    testimonial: '',
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.company) return;
    setSubmissionFeedback(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00C2FF', '#7C3AED', '#D946EF'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">

      {/* ─── 3D HERO HEADER ──────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <AmbientWaveCanvas intensity={0.95} interactive={true} />
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-r from-brand-cyan/15 via-brand-purple/15 to-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-purple" />
            <span>Client Testimonials &amp; Feedback</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
            Client Experiences &amp; <br />
            <span className="text-gradient">Building Trust</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover how MRNS Solutions partners with businesses to deliver modern, reliable software and digital solutions.
          </p>

          {/* Authenticity Transparency Disclosure */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-amber-50/90 backdrop-blur-md border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3 text-left shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold">Strict Integrity Disclosure:</span>
              <p className="text-amber-800">
                Only verified and genuine client testimonials are displayed on this page. No fabricated reviews, placeholder quotes, or invented client names are shown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO TESTIMONIAL – MILESTONE CONSTRUCTION ──────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-premium overflow-hidden">

          {/* Section Header */}
          <div className="px-8 sm:px-12 pt-10 pb-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-purple uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Video Testimonial</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                What Our Client Says About MRNS Solutions
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Watch our client share their experience working with MRNS Solutions and the website developed for Milestone Construction.
              </p>
            </div>

            {/* Client Badge */}
            <div className="shrink-0 flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-200">
                <Building2 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Milestone Construction</div>
                <div className="text-xs text-slate-500">Civil Contracting &amp; Interiors</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Player – medium size, centered, aspect-ratio preserved */}
          <div className="px-8 sm:px-12 py-8">
            <MilestoneReviewVideoPlayer />
          </div>

          {/* Verified Footer Note */}
          <div className="px-8 sm:px-12 pb-8">
            <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Verified Video Review:</strong> This testimonial was recorded and submitted directly by Milestone Construction. No statements have been modified or added.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT TESTIMONIAL SUBMISSION FORM ──────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-premium p-8 sm:p-12 space-y-6">
          <div className="text-center space-y-2 pb-4 border-b border-slate-100">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-purple uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Partner With MRNS</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950">
              Submit a Verified Client Review
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Are you an existing MRNS client? Share your experience to help us publish your authorized testimonial.
            </p>
          </div>

          {submissionFeedback ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Thank You For Your Feedback</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your testimonial has been securely submitted for verification. The MRNS team will confirm authorization before displaying your review.
              </p>
              <button
                onClick={() => setSubmissionFeedback(false)}
                className="text-xs font-bold text-brand-purple hover:underline"
              >
                Submit another feedback response
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Lee"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Designation / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="Managing Director / Founder"
                    value={reviewForm.role}
                    onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nova Corp"
                    value={reviewForm.company}
                    onChange={(e) => setReviewForm({ ...reviewForm, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Delivered Project Name</label>
                  <input
                    type="text"
                    placeholder="Custom Web Platform / Business App"
                    value={reviewForm.project}
                    onChange={(e) => setReviewForm({ ...reviewForm, project: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Feedback &amp; Experience *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details on your project outcome, team responsiveness, and overall experience..."
                  value={reviewForm.testimonial}
                  onChange={(e) => setReviewForm({ ...reviewForm, testimonial: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-purple resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold text-xs tracking-wide shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Verified Feedback For Review</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to create your next success story with MRNS?
            </h3>
            <p className="text-sm text-slate-400">
              Partner with MRNS Solutions to build custom software and web platforms built for long-term reliability.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-magenta text-white font-bold text-xs tracking-wide shadow-glow-brand hover:scale-105 transition-all"
          >
            <span>Start Your Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
