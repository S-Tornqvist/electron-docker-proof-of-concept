const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main/main.ts',
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  }
};
