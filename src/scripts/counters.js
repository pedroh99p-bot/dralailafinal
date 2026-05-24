import { prefersReducedMotion, qs, qsa } from './helpers.js';

export function initCounters() {
  const section = qs('#counter-section');
  const counters = qsa('.count', section || document);
  if (!section || !counters.length) return;

  const setFinalValues = () => {
    counters.forEach((counter) => {
      counter.textContent = counter.dataset.target;
    });
  };

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    setFinalValues();
    return;
  }

  let hasAnimated = false;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting || hasAnimated) return;
      hasAnimated = true;

      counters.forEach((counter) => {
        const target = Number(counter.dataset.target || counter.textContent);
        const duration = 1500;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(target * eased).toLocaleString('pt-BR');
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            counter.textContent = target.toLocaleString('pt-BR');
          }
        }

        window.requestAnimationFrame(step);
      });

      observer.disconnect();
    },
    { threshold: 0.35 },
  );

  observer.observe(section);
}
