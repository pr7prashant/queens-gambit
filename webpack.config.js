const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
	console.log('WEBPACK ENV: ', env);

	const isDevMode = env !== 'production';

	let config = {
		entry: ['./src/index.js'],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash].js',
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new FaviconsWebpackPlugin('./src/assets/images/logo.png'),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
				},
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
			}),
		],
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.(ac3|gif|jpe?g|m4a|mp3|ogg|png|svg|otf)$/,
					loader: 'file-loader',
					options: {
						outputPath: './assets',
					},
				},
			],
		},
		optimization: {
			minimize: true,
			minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
	};

	// Mode
	config.mode = isDevMode ? 'development' : 'production';

	// Dev Tools
	config.devtool = isDevMode ? 'inline-source-map' : false;

	// Plugins
	if (!isDevMode) {
		config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8181 }));
	}

	// Dev Server
	if (isDevMode) {
		config.devServer = {};
		config.devServer.disableHostCheck = true;
	}

	return config;
};
