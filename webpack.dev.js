// const path =
// import path from 'path'
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "development",
  entry: {
    index: "./src/index.js",
    //  print: "./src/print.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|fig)$/, // less than 8kb will be inlined
        type: "asset",
      },
    ],
  },
  // source map
  // devtool: "inline-source-map",
  // dev-server
  // devServer: {
  //   contentBase: "./dist",
  //   port: 8000,
  //   proxy: {},
  // },
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },
    // runtimeChunk: "single",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "dev mode",
      templateContent: `
        <html>
          <body>
          <div id='root'></div>
          </body>
        </html>
    `,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    // filename: "[name].[contenthash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
  },
};
