const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html'
    }),
    ],
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' ),
    },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
    },
    devServer: {
    static: './dist',
  },
};