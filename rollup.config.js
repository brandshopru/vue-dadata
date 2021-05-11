import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

require('fs').unlink('dist/index.d.ts', err => {});

const plugins = [
  typescript({
    typescript: require('typescript'),
    objectHashIgnoreUnknownHack: true,
  }),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  vue({
    css: true,
    compileTemplate: true,
    template: {
      isProduction: true,
    },
  }),
  nodeResolve({
    browser: true,
    jsnext: true
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser());
}

if (process.env.NODE_ENV === 'development') {
  plugins.push(livereload());
  plugins.push(
    serve({
      open: true,
      contentBase: 'dist',
    }),
  );
}

export default {
  input: 'src/entry.js',
  output: [
    {
      file: 'dist/vuedadatabscomponent.esm.js',
      format: 'esm',
      name: 'vueDadataBs'
    },
    {
      file: 'dist/vuedadatabscomponent.umd.js',
      format: 'umd',
      name: 'vueDadataBs'
    },
    {
      file: 'dist/vuedadatabscomponent.min.js',
      format: 'iife',
      name: 'vueDadataBs'
    },
  ],
  sourcemap: true,
  plugins,
};
