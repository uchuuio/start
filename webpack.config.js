const webpack = require('webpack');

module.exports = {
	entry: './src/jsx/app.jsx',

	output: {
		path: `${__dirname}/assets/js`,
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify('production'),
		}),
	],

	module: {
		preLoaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
		],
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader',
			},
		],
	},
};
