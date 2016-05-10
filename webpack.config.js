var path = require('path'), 
    webpack = require('webpack');
var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, './dist'),
    mainPath = path.resolve(__dirname, './index.js');

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })
];
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client','bootstrap-loader','./app/index'],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|lib/,
        include: __dirname
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        include: __dirname
      },
      { 
        test: /\.(jpe?g|png|gif)$/, 
        loader: 'url?limit=10000!img?progressive=true' 
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      { 
        test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' 
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  eslint: {
      configFile: eslintrcPath
  },
  plugins: plugins
};
