const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
    background: path.resolve("./src/background.ts"),
    content: path.resolve("./src/content.ts"),
    sportybet: path.resolve("./src/popup/SportyBetPopup.tsx"),
    betway: path.resolve("./src/popup/BetWayPopup.tsx"),
    bet9ja: path.resolve("./src/popup/Bet9jaPopup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // ident: "postcss",
                // plugins: [tailwindcss, autoprefixer],
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
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

// const path = require('path');

// module.exports = {
//   mode: "development",

//   entry: {
//     popup: path.resolve("./src/popup/popup.tsx"),
//     background: path.resolve("./src/background.ts"),
//     sportybet: path.resolve("./src/content/SportyBetPopup.tsx"),
//     betway: path.resolve("./src/content/BetWayPopup.tsx"),
//     bet9ja: path.resolve("./src/content/Bet9jaPopup.tsx"),
//   },

//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: "ts-loader",
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//   },
// };
