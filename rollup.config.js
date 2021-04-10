import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
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
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      config: './postcss.config.js',
      extract: 'dist/assets/styles/main.css',
    }),
  ],
};
