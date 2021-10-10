/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: 'errors-only',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    browsers: ['last 2 version', '>1%', 'ios 7'],
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|fig)$/, // less than 8kb will be inlined
        type: 'asset',
      },
    ],
  },
  externalsType: 'script',
  externals: {
    react: ['https://unpkg.com/react@17/umd/react.development.js', 'React'],
    'react-dom': [
      'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
      'ReactDOM',
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'dev mode',
      templateContent: `
        <html>
          <body>
          <div id='root'></div>
          </body>
        </html>
    `,
      minify: true,
    }),
    new miniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
};
