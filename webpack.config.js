const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        //publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        publicPath: '../img/'
                    }
                }
            },
            {
                test: /\.module\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: 'src/assets/imgs',
        //         to: 'img'
        //     }]
        // }),
    ],
};