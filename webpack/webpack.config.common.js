const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const pages = ['index', 'about', 'work', 'contact', 'playground', '404', 'single', 'work/ledger']

// Js Files Management
const jsConfig = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}

// HTML File Management
const htmlConfig = {
    rules: [
        {
            test: /\.(html)$/,
            use: ['html-loader']
        }
    ]
}

// Scss Files Management
const scssConfig = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: IS_DEVELOPMENT
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: IS_DEVELOPMENT,
                // postcssOptions: {
                //     plugins: [
                //         [
                //             // 'postcss-preset-env',
                //             'postcss-combine-media-query'
                //         ]
                //     ]
                // }
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: IS_DEVELOPMENT
            }
        }
    ]
}

// Fonts File Management
const fontsConfig = {
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset/resource',
    generator: {
        filename: 'assets/fonts/[name][ext][query]'
    }
}

// Images Files Management
const imgConfig = {
    test: /\.(jpe?g|png|gif|svg|webp)$/i,
    type: 'asset/resource',
    generator: {
        // filename: 'assets/images/[contenthash][ext][query]'
        filename: 'assets/images/[name][ext][query]'
    }
}

// Shader Files Management
const glslConfig = {
    test: /\.(glsl|vs|fs|vert|frag)$/,
    type: 'asset/source',
    generator:
    {
        filename: 'assets/images/[hash][ext]'
    }
}

// Global Config
const config = {
    entry: [
        path.resolve(__dirname, '../src/scripts/app.js'),
        path.resolve(__dirname, '../src/styles/main.scss')
    ],
    output: {
        filename: 'build.[contenthash].js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            htmlConfig,
            jsConfig,
            scssConfig,
            fontsConfig,
            imgConfig,
            glslConfig
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html'
        }),


        ...pages.map(page => {
            return new HtmlWebpackPlugin({
                template: `./src/pages/${page}.html`,
                filename: `${page}/index.html`
            })
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new CopyPlugin({
            patterns: [
                {
                    globOptions: {
                        ignore: ['**/README.txt']
                    },

                    from: './shared',
                    to: ''
                },
                {
                    from: "./src/form.php",
                    to: "form/index.php"
                }
            ]
        }),

        new ESLintPlugin()
    ]
}

module.exports = config
