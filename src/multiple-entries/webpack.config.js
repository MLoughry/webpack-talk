const { resolve } = require('path');

module.exports = {
    entry: {
        index1: require.resolve('./src/index1.js'),
        index2: require.resolve('./src/index2.js'),
    },
    output: {
        libraryTarget: 'global',
        library: ['fib'],
        path: resolve(__dirname, 'dist')
    },
    target: 'node',
}