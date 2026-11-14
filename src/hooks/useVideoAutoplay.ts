import { useEffect, useRef, useCallback } from 'react';

// ─── Global single-video registry ────────────────────────────────────────────
// Module-level set so it persists across component instances and pages.
// Stores the currently active HTMLVideoElement (if any).
let _activeVideo: HTMLVideoElement | null = null;

function pauseActiveVideo() {
  if (_activeVideo && !_activeVideo.paused) {
    _activeVideo.pause();
  }
}

function registerActiveVideo(el: HTMLVideoElement | null) {
  _activeVideo = el;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
/**
 * Attaches an IntersectionObserver to `containerRef`.
 * When the container enters the viewport (threshold ≥ 0.4):
 *   - Pauses the globally active video (if different from this one)
 *   - Attempts muted autoplay on `videoRef`
 * When the container leaves the viewport:
 *   - Pauses `videoRef`
 *
 * Manual pause by the user is respected: if the user paused the video while
 * it was visible, `userPaused` flag prevents the observer from re-playing it
 * on the next intersection callback (only a re-scroll-away + scroll-back resets).
 *
 * @returns `markUserPaused` – call this when the user manually pauses.
 * @returns `markUserResumed` – call this when the user manually plays.
 */
export function useVideoAutoplay(
  containerRef: React.RefObject<HTMLElement | null>,
  videoRef: React.RefObject<HTMLVideoElement | null>,
  hasError: boolean
) {
  const userPausedRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const markUserPaused = useCallback(() => {
    userPausedRef.current = true;
  }, []);

  const markUserResumed = useCallback(() => {
    userPausedRef.current = false;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video || hasError) return;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset user-paused flag on fresh scroll-back (new visibility event)
          // only when it was previously hidden (ratio crossed back up from 0)
          if (!userPausedRef.current) {
            // Pause any other globally active video
            if (_activeVideo && _activeVideo !== video) {
              pauseActiveVideo();
            }
            registerActiveVideo(video);
            // Muted autoplay – required by all major browsers
            video.muted = true;
            video.play().catch(() => {
              // Autoplay blocked – silently ignore; user can manually play
            });
          }
        } else {
          // Video scrolled out of view – pause it
          if (!video.paused) {
            video.pause();
          }
          // If this was the active video, deregister
          if (_activeVideo === video) {
            registerActiveVideo(null);
          }
          // Reset user-paused flag so next time they scroll back it autoplays
          userPausedRef.current = false;
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.4, // 40% of the container must be visible to trigger
    });

    observerRef.current.observe(container);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      // If unmounting while active, deregister
      if (_activeVideo === video) {
        registerActiveVideo(null);
      }
    };
  }, [containerRef, videoRef, hasError]);

  return { markUserPaused, markUserResumed };
}
