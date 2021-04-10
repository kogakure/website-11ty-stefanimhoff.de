import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/assets/scripts/main.js',
  output: {
    dir: './',
    entryFileNames: 'dist/assets/scripts/[name].js',
    format: 'iife',
    name: 'version',
    sourcemap: true,
    plugins: [terser()],
  },
  plugins: [
    postcss({
      config: './postcss.config.js',
      extract: 'dist/assets/styles/main.css',
    }),
  ],
};
