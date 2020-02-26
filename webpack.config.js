const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
//exporterar alla modulerna 
module.exports = {
    mode: "production",
    target: "node",
    entry: ['./index.js', './sass/index.scss'],
    // när allt är packat ska den skickas till bundle.js
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "./public"
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]

            })
        }]
    },
        plugins: [
            new ExtractTextPlugin({
                filename: 'public/index.css'
            })
        ],
        externals: [nodeExternals()]
}