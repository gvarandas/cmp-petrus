module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'env'],
      },
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    port: 4200,
    historyApiFallback: true,
    contentBase: './',
    publicPath: '/',
  },
};
