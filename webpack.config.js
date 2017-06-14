const path = require('path');
const webpack = require('webpack');


module.exports = {

    context: path.resolve(__dirname, './src'),
    devtool: 'source-map',
    entry: {
        app: './Animate.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vuedrops-animate.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'VDAnimation',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src'),  // New
    },
};
