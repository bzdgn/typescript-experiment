const path = require('path');
const index = "index"

module.exports = {
	entry: `./src/${index}.ts`,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, "./public")
    },
    port: 8080
	},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}