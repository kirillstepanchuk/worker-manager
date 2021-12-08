const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common('prod'), {
	mode: 'production',
	output: {
		filename: '[chunkhash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [
			new TerserPlugin(),
		],
	},
	plugins: [
		new BundleAnalyzerPlugin(),
	],
});
