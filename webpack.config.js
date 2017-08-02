const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js', 
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module: {
    loaders: [{
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
  	    query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.css$|.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/, 
        loader: 'svg-loader'
      }
    ]
  }
}