import { qsa } from './helpers.js';

export function initRollers() {
  const tracks = qsa('.roller__track, .testimonial-roller__track');
  if (!tracks.length) return;

  let frame = 0;

  function applyDurations() {
    tracks.forEach((track) => {
      const firstSet = track.firstElementChild;
      const width = firstSet?.scrollWidth || track.scrollWidth / 2;
      if (!width) return;
      const duration = Math.max(24, Math.round(width / 70));
      track.style.setProperty('--marquee-duration', `${duration}s`);
    });
  }

  function scheduleApply() {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(applyDurations);
    });
  }

  scheduleApply();
  window.addEventListener('resize', scheduleApply, { passive: true });
  window.addEventListener('load', scheduleApply, { once: true });

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleApply).catch(() => {});
  }
}
