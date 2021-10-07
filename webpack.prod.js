const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    browsers: ["last 2 version", ">1%", "ios 7"],
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|fig)$/, // less than 8kb will be inlined
        type: "asset",
      },
    ],
  },
  optimization: {
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
      minify: true,
    }),
    new miniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
    }),
    new optimizeCssAssetsWebpackPlugin(),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    filename: "[name]_[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
};
