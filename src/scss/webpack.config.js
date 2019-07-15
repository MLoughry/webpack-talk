const { resolve } = require('path');
const inlineRtl = require('postcss-inline-rtl');
const cssnano = require('cssnano');

module.exports = {
    entry: require.resolve('./src/index.js'),
    output: {
        libraryTarget: 'global',
        library: ['fib'],
        path: resolve(__dirname, 'dist')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    '@microsoft/loader-load-themed-styles',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {},
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: loader => [
                                inlineRtl,
                                cssnano({
                                    preset: [
                                        'default',
                                        {
                                            orderedValues: false,
                                            mergeLonghand: false,
                                        },
                                    ],
                                }),
                            ],
                        },
                    }, 
                    'sass-loader'],
            },
        ]
    }
}