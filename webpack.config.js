var webpack = require('webpack')
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './app'),
  entry: {
    js: './index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        include: /app/,
        loaders: [
          'style',
          'css?modules',
          'postcss'
        ]
      }
    ]
  },
  postcss(webpack) {
    return [
      postcssImport({
          addDependencyTo: webpack
      }),
      precss,
      autoprefixer
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  devServer: {
    contentBase: './app',
    hot: true,
    port: 4000,
    inline: true,
    historyApiFallback: true
  }
}
