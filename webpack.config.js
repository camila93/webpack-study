const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 
                    'vue-style-loader', 
                    'css-loader' 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './dist/index.html',
        }),
        new VueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    }
}