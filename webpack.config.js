let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let { VueLoaderPlugin } = require('vue-loader');

const webpackConfig = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle-[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        // contentBase: __dirname + '/public',
        // historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': __dirname + '/src',
            'vue': __dirname + '/node_modules/vue/dist/vue.js'
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
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),
        new CleanWebpackPlugin()
    ]
};

module.exports = webpackConfig;