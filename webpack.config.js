const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/bundle.js',
        publicPath: './',
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            // babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            // style and css extract
            {
                test: [/.css$|.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: [require('autoprefixer')],
                            },
                        },
                    },
                ],
            },
            // image file loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/img/',
                            publicPath: '../img/',
                        },
                    },
                ],
            },
            // fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/',
                            publicPath: '../fonts',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, 'src/assets/scss'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@': path.resolve(__dirname, 'src'),
        },
        modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Setting up webpack 4',
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
        }),
    ],
    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 1000000,
    },
};
