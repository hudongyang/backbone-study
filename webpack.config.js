var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      script: './src/main.js',
      vendor: ['jquery']
  },
  output: {
    path: './dist',
    filename: 'build.js'
  },
  module: {
      // 加载器
      loaders: [
          // 使用Babel转换ES6，排除node_modules目录下的js
          { 
            test: /\.js$/, 
            loader: 'babel', 
            exclude: /node_modules/, 
            query: {
              presets: ['es2015'] 
            } 
          }
      ]
  },
  resolve: {
      alias: {
          "jquery": path.resolve(__dirname, "node_modules/jquery/dist/jquery")
      }
  },
  plugins: [
      new webpack.ProvidePlugin({
        //设置全局jquery
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
      }),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  devtool: 'source-map'
}