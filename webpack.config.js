const webpack = require('webpack');
const path = require('path');

module.exports={
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'bootstrap-loader',
    './src/index.js'
  ],
  output:{
    path: path.resolve(__dirname+'/build'),
    filename: 'bundle.js'
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
  ],
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude:['node_modules']
      },
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true'},
      // Bootstrap 3 jquery requirement
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }

    ]
  }
}
