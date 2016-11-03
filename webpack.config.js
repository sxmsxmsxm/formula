
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

// webpack command run by npm start or npm run build, then it will be in the npm lifecycle.
const TARGET = process.env.npm_lifecycle_event
const PATH = {
  src: path.join(__dirname,'src'),
  dist: path.join(__dirname,'dist')
}

const common = {
  entry: PATH.src,
  output: {
    path: PATH.dist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH.src, 'assets/tpl.html'),
      hash: true
    })
  ],
  module: {
    loaders: [
      {
        // This loader example kept in here for future reference of custom webpack loader
        test: /\.woota$/,
        include: PATH.src,
        loader: path.resolve('./src/demo/loader.js')
      },
      {
        test: /\.css$/,
        include: PATH.src,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8000'
      },
      {
        test: /\.jsx?$/,
        include: PATH.src,
        loader: 'babel',
        query: {
          presets: ['es2015','stage-0','react']
        }
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
}

if(TARGET === 'start'){
  module.exports = merge(common, {
    devServer: {
      hot: true,
      inline: true,
      stats: 'errors-only',
      contentBase: PATH.dist
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
  })
}
if(TARGET === 'build'){
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    ]
  })
}
