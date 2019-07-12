module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'global',
        library: ['fib'],
    },
    target: 'node',
}