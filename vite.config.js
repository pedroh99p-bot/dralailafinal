import { defineConfig, loadEnv } from 'vite';

function trackingHead(gtmId, metaPixelId) {
  return `
    <script>
      document.documentElement.classList.add('js');
      window.__TRACKING_CONFIG__ = {
        gtmId: ${JSON.stringify(gtmId)},
        metaPixelId: ${JSON.stringify(metaPixelId)}
      };
      (function loadGtm(w, d, s, l, i) {
        if (!i) return;
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var firstScript = d.getElementsByTagName(s)[0];
        var gtmScript = d.createElement(s);
        var layer = l !== 'dataLayer' ? '&l=' + l : '';
        gtmScript.async = true;
        gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + layer;
        firstScript.parentNode.insertBefore(gtmScript, firstScript);
      })(window, document, 'script', 'dataLayer', window.__TRACKING_CONFIG__.gtmId);
      (function loadMetaPixel(f, b, e, v, n, t, s) {
        var pixelId = window.__TRACKING_CONFIG__.metaPixelId;
        if (!pixelId) return;
        if (f.fbq) return;
        n = f.fbq = function pixelQueue() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
        n('init', pixelId);
        n('track', 'PageView');
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    </script>
  `;
}

function trackingBody(gtmId, metaPixelId) {
  const gtm = gtmId
    ? `
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        title="Google Tag Manager"
      ></iframe>
    </noscript>`
    : '<noscript data-tracking="gtm"></noscript>';

  const pixel = metaPixelId
    ? `
    <noscript>
      <img
        height="1"
        width="1"
        style="display: none"
        alt=""
        src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1"
      />
    </noscript>`
    : '<noscript data-tracking="meta-pixel"></noscript>';

  return `${gtm}\n${pixel}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const gtmId = /^GTM-[A-Z0-9]+$/.test(env.VITE_GTM_ID || '') ? env.VITE_GTM_ID : '';
  const metaPixelId = /^[0-9]{5,}$/.test(env.VITE_META_PIXEL_ID || '') ? env.VITE_META_PIXEL_ID : '';

  return {
    plugins: [
      {
        name: 'landing-tracking-placeholders',
        transformIndexHtml(html) {
          return html
            .replace('<!-- TRACKING_HEAD -->', trackingHead(gtmId, metaPixelId))
            .replace('<!-- TRACKING_BODY -->', trackingBody(gtmId, metaPixelId));
        },
      },
    ],
    server: {
      host: '127.0.0.1',
      port: 5173,
    },
    preview: {
      host: '127.0.0.1',
      port: 4173,
    },
  };
});
