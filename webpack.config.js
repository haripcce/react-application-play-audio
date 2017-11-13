var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry : './src/app.js',
  output : {
    path : 'F:\\react-app\\static\\build',
    filename : 'bundle.min.js'
  },
  module:{
loaders : [{
  test : /\.(js|jsx)$/,
//  exclude:/node_modules/,
  loader:"babel-loader",
  query:{
  presets:["es2015","stage-0","react"]
  }

}]

},
  resolve : {
    extensions: ['.js', '.jsx'],
  modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  plugins:[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})

  ]
}
