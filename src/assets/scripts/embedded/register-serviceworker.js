window.addEventListener('load', () => {
	navigator.serviceWorker.register('/sw.js').catch((registrationError) => {
		console.error('SW registration failed: ', registrationError);
	});
});
