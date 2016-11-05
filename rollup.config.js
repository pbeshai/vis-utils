import babel from 'rollup-plugin-babel';

var globals = {
  'd3-array': 'd3',
}

export default {
  entry: 'index.js',
  moduleName: 'd3',
  plugins: [babel()],
  globals: globals,
  external: Object.keys(globals),
  targets: [
    { format: 'umd', dest: 'build/vis-utils.js' },
    { format: 'umd', dest: 'example/vis-utils.js' },
  ]
};
