import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

var globals = {
  'd3-array': 'd3',
}

export default {
  entry: 'src/index.js',
  moduleName: 'visUtils',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      // see https://github.com/rollup/rollup/issues/357
      babelrc: false,
      presets: ['es2015-rollup'],
      exclude: 'node_modules/**'
    }),
  ],
  globals: globals,
  external: Object.keys(globals),
  targets: [
    { format: 'umd', dest: 'build/vis-utils.js' },
  ]
};
