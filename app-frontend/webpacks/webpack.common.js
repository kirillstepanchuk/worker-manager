const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const minifyHtmlPluginParameters = {
	collapseWhitespace: true,
	removeComments: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	useShortDoctype: true
}

module.exports = (env) => {
	const isProd = env === 'prod'

	return {
		entry: './src/index.tsx',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: ['ts-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(ttf|eot|woff|woff2)$/,
					loader: 'file-loader'
				}
			]
		},
		resolve: {
			extensions: ['', '.tsx', '.ts', '.jsx', '.js']
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				minify: isProd && minifyHtmlPluginParameters
			})
		]
		// eslint: {
		//   configFile: '../.eslintrc.js',
		//   emitWarning: true,
		// },
	}
}
