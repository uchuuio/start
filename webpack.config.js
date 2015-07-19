// Load out PostCSS Modules
var cssnano = require('cssnano');
var lost = require('lost');
var vars = require('postcss-simple-vars');
var assets  = require('postcss-assets');

// Get our Theme Colors
var Config = require('./config.js');

// Webpack Setup
module.exports = {
	entry: "./src/jsx/app.jsx",
	output: {
		path: "./dist/js/",
		filename: "app.js",
	},

	module: {
		loaders: [
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
			{ test: /\.json$/, loader: "json" }
		]
	},

	postcss: function () {
		return [
			vars({ variables: { backgroundUrl: Config.backgroundUrl } }),
			assets({
				loadPaths: ['src/img/']
			}),
			cssnano,
			lost
		];
	}
};
