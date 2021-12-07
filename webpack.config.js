const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const TerserJSPlugin = require('terser-webpack-plugin'); // already there

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/g360_bundle_v1.0.0.js'
  },
  module: {

    rules: [

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'index'),
        query: {
          presets: ['@babel/preset-env']
        }
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './static/fonts/',
            publicPath: '../fonts/'
          }
        }]
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },



    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.svg', '.eot', '.woff2', '.woff', '.ttf']
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: 'static/css/g360_bundle_v1.0.0.css'
    }),

  ]
};