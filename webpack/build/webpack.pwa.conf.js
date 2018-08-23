const merge = require('webpack-merge');
const Workbox = require('workbox-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: 'inline-source-map',
    plugins: [
        new Workbox.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
});