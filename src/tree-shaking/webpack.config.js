const { resolve } = require('path');

module.exports = {
    entry: require.resolve('./src/index.js'),
    output: {
        libraryTarget: 'global',
        library: ['fib'],
        path: resolve(__dirname, 'dist')
    },
    target: 'node',
    optimization: {
      usedExports: true,
      concatenateModules: false,
    },
}