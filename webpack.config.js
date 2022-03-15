const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        entry: './src/index.js',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DO SHIT!',
            template: path.resolve(__dirname, './public/index.html'), // template file
            filename: 'index.html', // output file
        }),
        new ESLintPlugin(),
        // needed in production build where we care about application perfomance.
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css',
        // }),
    ],
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['js', 'ts'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            // ...etc other paths - aliases
        },
    },
    //   modules suggest types of files to be imported and how webpack treats them
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, './src/assets/images'),
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
};
