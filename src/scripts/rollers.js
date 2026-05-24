import { qsa } from './helpers.js';

export function initRollers() {
  qsa('.roller__track, .testimonial-roller__track').forEach((track) => {
    const width = track.scrollWidth;
    const duration = Math.max(28, Math.round(width / 72));
    track.style.setProperty('--marquee-duration', `${duration}s`);
  });
}
