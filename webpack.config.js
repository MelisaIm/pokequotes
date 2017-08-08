const libpath = require('path');
const rimraf = require('rimraf');

function path(path) {
	return libpath.join(__dirname, path);
}

rimraf.sync(path('public/static/app.js'));

module.exports = {
	target: 'web',
	entry: path('src/index.js'),
	output: {
		path: path('public/static'),
		pathinfo: true,
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				include: path('src'),
				test: /\.js$/,
				enforce: 'pre',
				use: ['eslint-loader']
			}
		],
		loaders: [
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
		]
	}
};
