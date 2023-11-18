const path = require('path')
const { merge } = require('webpack-merge')

const commonConfiguration = require('./webpack.config.common.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Configure Dev Server
const devServer = {
    static: {
        directory: path.join(__dirname, '../build')
    },
    devMiddleware: {
        publicPath: 'build',
        writeToDisk: true
    }
}

// Update Only what change in "development" mode
const devConf = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer,

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['build'] }
        })


        // Example of BS sync to vhost
        // new BrowserSyncPlugin({
        //     host: 'http://www.empirik.local',
        //     port: 3000,
        //     files: [
        //         './*.php',
        //         './build/*.css'
        //     ],

        //     proxy: 'http://www.empirik.local',
        //     injectCss: true,
        // },
        // {
        //     reload: false
        // })
    ]
}

module.exports = merge(
    commonConfiguration,
    devConf
)
