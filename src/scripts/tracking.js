function eventParams(element) {
  return {
    source: element.dataset.trackSource || 'unknown',
    label: element.textContent.trim().replace(/\s+/g, ' ').slice(0, 80),
    href: element.href || undefined,
  };
}

export function trackEvent(name, params = {}) {
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, params);
  }
}

export function initTracking() {
  document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-track]');
    if (!element) return;

    const params = eventParams(element);
    element.dataset.track.split(/\s+/).forEach((eventName) => {
      if (eventName) trackEvent(eventName, params);
    });
  });
}
