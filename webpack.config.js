const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/assets/manifest.json"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon.png"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "Bet Buddy",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].js",
  },
};
