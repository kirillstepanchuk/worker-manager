const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common('prod'), {
<<<<<<< HEAD
  mode: 'production',
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minmize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
=======
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
>>>>>>> 0465ce64b6cb04ab0751c4c2cac4cdf092297a81
});
