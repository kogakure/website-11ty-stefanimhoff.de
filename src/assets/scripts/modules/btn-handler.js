export function btnHandler(selector, callback, prevent = true) {
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
