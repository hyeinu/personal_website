// CONSTANTS
const PORT = process.env.PORT || 8000;

// PACKAGE REQUIRES
const express = require('express');
// const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// APP DECLARATION

const app = express();

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
