import sal from 'sal.js';
import { btnHandler } from './modules/btn-handler';
import { scrollHandler } from './modules/scroll-handler';
import { sourceCodeInfo } from './modules/source-code-info';

if (
  'querySelector' in document &&
  'localStorage' in window &&
  'addEventListener' in window
) {
  /* Initialize scroll reveal */
  sal({
    threshold: 0.1,
  });

  /* Show link to source code in console */
  sourceCodeInfo();

  /* Scrolling up or down? */
  scrollHandler();

  /* Toggle the theme */
  btnHandler('#theme-toggle', function () {
    window.__toggleTheme();
  });

  /* Smooth scrolling to the top */
  btnHandler('#up-link', function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  btnHandler('.spoiler', function (event) {
    event.target.classList.toggle('spoiler-visible');
  });

  /* Deobfuscate the email */
  btnHandler(
    '#email',
    function (event) {
      if (event.target.classList.contains('objuscated')) {
        const link = event.target;
        const lock = link.parentNode.querySelector('#lock-box');

        event.preventDefault();

        link.classList.remove('objuscated');
        link.text = 'hey@imhoff.name';
        link.href = 'mailto:hey@imhoff.name';

        if (lock) {
          lock.classList.remove('hidden');
        }
      } else {
        return;
      }
    },
    false
  );
}
