import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

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
      dir: './',
    },
    plugins: [
      postcss({
        config: './postcss.config.js',
        extract: 'dist/assets/styles/main.css',
      }),
    ],
  },
  {
    input: 'src/assets/styles/print.css',
    output: {
      dir: './',
    },
    plugins: [
      postcss({
        config: './postcss.config.js',
        extract: 'dist/assets/styles/print.css',
      }),
    ],
  },
];

export default config;
