const path = require('path')

module.exports = env => ({
	entry: './lib/index.js',
	output: {
		filename: 'linter.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					{
						loader: 'eslint-loader'
					}
				]
			}
		]
	},
	mode: env.development ? 'development' : 'production',
	devtool: env.development ? 'source-map' : 'none'
})
