import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

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
    buble(),
  ],
  globals: globals,
  external: Object.keys(globals),
  targets: [
    { format: 'umd', dest: 'build/vis-utils.js' },
  ],
  sourceMap: true,
  sourceMapFile: 'build/vis-utils.js.map',
};
