const { task, src, dest, watch, series, parallel } = require('gulp');

const babel = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const size = require('gulp-size');
const sourcemaps = require('gulp-sourcemaps');
const svgSprite = require('gulp-svg-sprite');

/**
 * Package JavaScript with Babel and Browserify
 */
task('js', () => {
	return browserify(['./src/assets/scripts/main.js'], {
		debug: true,
	})
		.transform(babel)
		.bundle()
		.on('error', function (err) {
			console.error(err);
			this.emit('end');
		})
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./dist/assets/scripts'));
});

/**
 * Create CSS and Sourcemaps with PostCSS
 */
task('css', function () {
	return src(['./src/assets/styles/*.css', './src/assets/styles/critical/*.css'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./dist/assets/styles'));
});

/**
 * Create CSS with PostCSS for production
 */
task('css:production', function () {
	return src(['./src/assets/styles/*.css'])
		.pipe(plumber())
		.pipe(postcss())
		.pipe(dest('./dist/assets/styles'));
});

/**
 * Copy critical CSS files to project folder
 */
task('css:critical', function () {
	return src(['./src/assets/styles/critical/*.css'])
		.pipe(plumber())
		.pipe(postcss())
		.pipe(dest('./src/includes/critical'));
});

/**
 * Create SVG sprite map from SVG files
 */
task('svg', () => {
	return src('./src/icons/*.svg')
		.pipe(plumber())
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						dest: '.',
						sprite: 'icons.svg',
					},
					svg: {
						xmlDeclaration: false,
						doctypeDeclaration: false,
					},
				},
			})
		)
		.pipe(dest('src/includes'));
});

/**
 * Optimize and minimize images
 */
task('optimize:images', () => {
	return src('src/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
		.pipe(
			imagemin({
				optimizationLevel: 3,
				progressive: true,
				interlaced: true,
			})
		)
		.pipe(dest('src/assets/images/'))
		.pipe(size());
});

/**
 * Run build for production
 */
task('build', parallel('js', 'css:production', 'css:critical'));

/**
 * Watch for changes in files
 */
task('watch', () => {
	watch('./src/assets/scripts/**/*.js', series('js'));
	watch('./src/assets/styles/**/*.css', series('css'));
});

/**
 * Compile assets and start watching for changes
 */
task('default', parallel('js', 'css', 'watch'));
