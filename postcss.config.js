module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-custom-properties'),
		require('postcss-nested'),
		require('postcss-extend'),
		require('postcss-media-minmax'),
		require('postcss-custom-media'),
		require('postcss-100vh-fix'),
		require('postcss-sort-media-queries')(),
		require('autoprefixer'),
		...(process.env.ELEVENTY_ENV === 'production' ? [require('cssnano')] : []),
	],
};
