export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function initSafely(name, callback) {
  try {
    callback();
  } catch (error) {
    console.warn(`[landing] ${name} falhou sem interromper a página.`, error);
  }
}
