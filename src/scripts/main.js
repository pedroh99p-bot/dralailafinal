import '../styles/main.css';

import { FinalOffer } from '../components/finalOffer.js';
import { FlipCards } from '../components/flipCards.js';
import { Footer } from '../components/footer.js';
import { Hero } from '../components/hero.js';
import { MapSection } from '../components/map.js';
import { Navbar } from '../components/navbar.js';
import { Quiz } from '../components/quiz.js';
import { Roller } from '../components/roller.js';
import { Specialist } from '../components/specialist.js';
import { Steps } from '../components/steps.js';
import { Testimonials } from '../components/testimonials.js';
import { rollers } from '../data/site-data.js';
import { initCounters } from './counters.js';
import { initFlipCards } from './flip-cards.js';
import { initNavbar } from './navbar.js';
import { initPreloader } from './preloader.js';
import { initQuiz } from './quiz.js';
import { initReveal } from './reveal.js';
import { initRollers } from './rollers.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initStepsTimeline } from './steps-timeline.js';
import { initSafely, qs } from './helpers.js';
import { initTracking } from './tracking.js';

function App() {
  return `
    ${Navbar()}
    <main>
      ${Hero()}
      ${Roller(rollers[0])}
      ${FlipCards()}
      <div class="decorator-line reveal" aria-hidden="true"></div>
      ${Specialist()}
      ${Roller(rollers[1])}
      ${Quiz()}
      <div class="decorator-line reveal" aria-hidden="true"></div>
      ${Steps()}
      ${Roller(rollers[2])}
      ${Testimonials()}
      <div class="decorator-line reveal" aria-hidden="true"></div>
      ${MapSection()}
      <div class="section-bridge reveal">
        <div class="section-bridge__inner">
          <span class="section-bridge__spark" aria-hidden="true">✦</span>
          <p>Atendimento com orientação, precisão e cuidado humano.</p>
        </div>
      </div>
      ${FinalOffer()}
      ${Roller(rollers[3], 'roller--quiet')}
    </main>
    ${Footer()}
  `;
}

function render() {
  const root = qs('#app');
  if (!root) return;
  root.innerHTML = App();
}

render();

initSafely('preloader', initPreloader);
initSafely('navbar', initNavbar);
initSafely('smooth-scroll', initSmoothScroll);
initSafely('reveal', initReveal);
initSafely('rollers', initRollers);
initSafely('flip-cards', initFlipCards);
initSafely('counters', initCounters);
initSafely('quiz', initQuiz);
initSafely('steps-timeline', initStepsTimeline);
initSafely('tracking', initTracking);

const currentYear = qs('#current-year');
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
