const path = require('path');
const webpack = require('webpack');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './Chain.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'VDAnimate',
        publicPath: '/assets',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src'),  // New
    },
};
