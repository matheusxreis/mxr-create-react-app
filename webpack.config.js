const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV === "development"; 


module.exports = {
    mode: isDev ? "development" : "production",
    devtool: isDev ? "eval-source-map" : "source-map",
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [
        isDev && new ReactRefreshWebpackPlugin(), 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        plugins: [
                            isDev && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
        ]
    }
}