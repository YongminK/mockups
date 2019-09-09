const path =require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'style-loader',
                   'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },   
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        proxy: {
            '/api': 'http://10.242.166.120:8080'
        }
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        )
    ]
};