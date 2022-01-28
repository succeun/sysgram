const webpack = require("webpack");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

var pkgson = require('./package.json');

module.exports = {
    mode: 'none',    // none, development, production
    entry: {
        sysgram: './src/sysgram.js',
        'sysgram.min': './src/sysgram.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (args) => {return args.runtime == "sysgram.min" ? 'sysgram.bundle.min.js' : 'sysgram.bundle.js'},
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'sysgram',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules'],
                options: {
                    presets: [
                        [
                            '@babel/preset-env', {
                                targets: { node: 'current' },
                                modules: 'auto',
                            }
                        ],
                    ],
                },
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(), // Clear "./dist",
        new webpack.DefinePlugin({
            SYSDIAGRAM_VERSION: JSON.stringify(pkgson.version),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.min\.js(\?.*)?$/i,
                extractComments: false,
            }),
        ],
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.json', '.jsx', '.css'],
    },
    devServer: {
        host : 'localhost',
        contentBase: path.join(__dirname, '/'),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true,
        index: 'index.html',
        writeToDisk: true,
    },
};