const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(__dirname, "react-frontend/src/index.jsx")],
  output: {
    path: path.resolve(__dirname, "react-frontend/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
