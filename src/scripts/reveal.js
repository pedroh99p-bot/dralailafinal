import { prefersReducedMotion, qsa } from './helpers.js';

export function initReveal() {
  const elements = qsa('.reveal');
  if (!elements.length) return;

  document.documentElement.classList.add('reveal-ready');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.02, rootMargin: '0px 0px -20px 0px' },
  );

  elements.forEach((element) => observer.observe(element));
}
