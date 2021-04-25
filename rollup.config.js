import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const cssFiles = [
  'about',
  'base',
  'colors-japan',
  'cv',
  'error-404',
  'haiku',
  'homepage',
  'journal',
  'projects',
  'sketchnotes',
  'podcasts'
];

const criticalCSS = cssFiles.map((file) => ({
  input: `src/assets/styles/critical/${file}.css`,
  output: { file: `src/includes/critical/${file}.css` },
  plugins: [postcss({ config: './postcss.config.js', extract: true })],
  onwarn(warning, warn) {
    if (warning.code === 'FILE_NAME_CONFLICT') return;
    warn(warning);
  },
}));

const config = [
  {
    input: 'src/assets/scripts/main.js',
    output: {
      globals: {
        'sal.js': 'sal',
      },
      dir: './',
      entryFileNames: 'dist/assets/scripts/[name].js',
      format: 'iife',
      name: 'version',
      sourcemap: true,
      plugins: [terser()],
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: 'src/assets/styles/main.css',
    output: {
      file: 'dist/assets/styles/main.css',
    },
    plugins: [
      postcss({
        config: './postcss.config.js',
        extract: true,
      }),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    },
  },
  {
    input: 'src/assets/styles/print.css',
    output: {
      file: 'dist/assets/styles/print.css',
    },
    plugins: [
      postcss({
        config: './postcss.config.js',
        extract: true,
      }),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    },
  },
  ...criticalCSS,
];

export default config;
