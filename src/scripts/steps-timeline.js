import { clamp, prefersReducedMotion, qs, qsa } from './helpers.js';

export function initStepsTimeline() {
  const timeline = qs('#timeline');
  const progress = qs('#timeline-progress');
  const steps = qsa('.timeline__step');
  if (!timeline || !progress || !steps.length) return;

  function activateByScroll() {
    if (prefersReducedMotion()) {
      progress.style.height = '100%';
      steps.forEach((step) => step.classList.add('is-active'));
      return;
    }

    const rect = timeline.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.62;
    const percent = clamp(((viewportAnchor - rect.top) / rect.height) * 100, 0, 100);
    progress.style.height = `${percent}%`;

    steps.forEach((step) => {
      const stepRect = step.getBoundingClientRect();
      if (stepRect.top < window.innerHeight * 0.72) {
        step.classList.add('is-active');
      }
    });
  }

  activateByScroll();
  window.addEventListener('scroll', activateByScroll, { passive: true });
  window.addEventListener('resize', activateByScroll);
}
