/* eslint-disable no-undef */
module.exports = {
/* eslint-enable no-undef */
  entry: './src/index.js',
  output: {
    path: 'lib',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: [/.png?$/, /.jpg?$/],
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  }
}
