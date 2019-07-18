const { resolve } = require('path');

module.exports = {
    entry: require.resolve('./src/boot.js'),
    output: {
        libraryTarget: 'global',
        library: ['fib'],
        path: resolve(__dirname, 'dist')
    },
    target: 'node',
    optimization: {
        concatenateModules: true,
        providedExports: true,
        usedExports: true,
    }
}