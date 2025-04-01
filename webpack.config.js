const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/index.tsx"),
    background: path.resolve("./src/background.ts"),
    options: path.resolve("./src/options/index.tsx"),
    newTab: path.resolve("./src/tabs/index.tsx"),
    content: path.resolve("./src/content.tsx"),
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
      {
        type: "assets/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/,
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
    // new HtmlPlugin({
    //   title: "Bet Buddy",
    //   filename: "popup.html",
    //   chunks: ["popup", ""],
    // }),
    ...getHtmlPlugins(["popup", "options", "newTab"]),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "content";
      },
    },
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map((name) => {
    return new HtmlPlugin({
      title: "Bet Buddy",
      filename: `${name}.html`,
      chunks: [name, ""],
    });
  });
}
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
