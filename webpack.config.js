var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/js/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'}),
    new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules', './app/components', './app/api', './app/data'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
        use: ['dsv-loader'] // or dsv-loader?delimiter=,
      }
    ],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015', 'stage-0'
          ],
          plugins: ["transform-decorators-legacy"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
      path.resolve(__dirname, 'node_modules/motion-ui/src'),
      path.resolve(__dirname, './node_modules/motion-ui/src')
    ]
  },
  devtool: process.env.NODE_ENV === 'production'
    ? undefined
    : 'cheap-module-eval-source-map'
};
