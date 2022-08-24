(function () {
	const root = document.getElementsByTagName('html')[0];

	function setTheme(newTheme) {
		window.__theme = newTheme;
		preferredTheme = newTheme;
		const currentTheme = newTheme === 'light' ? 'dark' : 'light';
		root.classList.add(newTheme);
		root.classList.remove(currentTheme);
	}

	let preferredTheme;

	try {
		preferredTheme = localStorage.getItem('theme');
	} catch (err) {
		console.error(err);
	}

	window.__setPreferredTheme = function (newTheme) {
		setTheme(newTheme);
		try {
			localStorage.setItem('theme', newTheme);
		} catch (err) {
			console.error(err);
		}
	};

	window.__toggleTheme = function () {
		const currentTheme = window.__theme;
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		window.__setPreferredTheme(newTheme);
	};

	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

	darkQuery.addEventListener('change', function (e) {
		window.__setPreferredTheme(e.matches ? 'dark' : 'light');
	});

	setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
