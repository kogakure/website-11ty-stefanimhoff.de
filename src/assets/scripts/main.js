const sourceCodeInfo = `👋 I see you’re interested in the source code of this site? You can find it here:

👉 https://github.com/kogakure/website-11ty-stefanimhoff.de
`;

console.info(sourceCodeInfo);

function btnHandler(selector, callback) {
  const btn = document.querySelector(selector);
  if (!btn) return;

  btn.addEventListener(
    'click',
    function (event) {
      event.preventDefault();
      callback();
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
