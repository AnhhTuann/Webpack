  const HtmlWebPackPlugin = require("html-webpack-plugin");
  module.exports = {
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/i,
          exclude: /\.lazy\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.lazy\.css$/i,
          use: [
            { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
            'css-loader',
          ],
        },
        
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
  };  