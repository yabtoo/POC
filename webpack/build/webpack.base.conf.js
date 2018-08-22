const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const manifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/assets/js/index.js'
    },
    output: {
        filename: '[name].[id].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new cleanPlugin(['dist'], { // 相对于根目录
            root: path.resolve(__dirname, '../') // 设置根目录，必须是绝对路径
        }),
        // 生成html文件
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 必须配合vue-loader使用
        new VueLoaderPlugin(),
        // 将css从bundle_js文件中抽离，并生成css文件
        new ExtractTextPlugin('name.css'),
        new manifestPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
};