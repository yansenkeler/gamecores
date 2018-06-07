let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle-[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: __dirname + '/dist',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': __dirname + '/src'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: ['./src']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

module.exports = webpackConfig;