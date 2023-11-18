const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.config.common.js')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const plugins = [
    new CleanWebpackPlugin()
]

// Update Only what change in 'production' mode
const prodConf = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    plugins
}

module.exports = merge(
    commonConfiguration,
    prodConf
)
