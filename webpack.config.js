let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let { VueLoaderPlugin } = require('vue-loader');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            '@': path.resolve(__dirname, './src'),
            '$components': path.resolve(__dirname, './src/components'),
            '$pages': path.resolve(__dirname, './src/pages'),
            '$assets': path.resolve(__dirname, './src/assets'),
            'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.js')
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
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
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
        new CleanWebpackPlugin([
            'build/bundle-*.js', 'build/bundle-*.js.map'
        ], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};

module.exports = webpackConfig;