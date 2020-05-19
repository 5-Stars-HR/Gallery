const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    watchContentBase: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  },
};
