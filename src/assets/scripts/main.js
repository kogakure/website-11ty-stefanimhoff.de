const sourceCodeInfo =
  '👋 I see you’re interested in the source code of this site? You can find it here: https://github.com/kogakure/website-11ty-stefanimhoff.de';

console.info(sourceCodeInfo);

function btnHandler(selector, callback, prevent = true) {
  const btn = document.querySelector(selector);
  if (!btn) return;

  btn.addEventListener(
    'click',
    function (event) {
      if (prevent) {
        event.preventDefault();
      }
      callback(event);
    },
    false
  );
}

btnHandler('#theme-toggle', function () {
  window.__toggleTheme();
});

btnHandler('#up-link', function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

btnHandler(
  '#email',
  function (event) {
    if (event.target.classList.contains('objuscated')) {
      const link = event.target;
      const lock = link.parentNode.querySelector('#lock-box');
      event.preventDefault();
      link.classList.remove('objuscated');
      lock.classList.remove('hidden');
      link.text = 'hey@imhoff.name';
      link.href = 'mailto:hey@imhoff.name';
    } else {
      return;
    }
  },
  false
);
