// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'material-ui';
var outputFile = libraryName + '.js';

var config = {
  entry: {
    "material-ui": __dirname + '/src/index.ecco.js', // We're using this to manually select which modules we consume and therefore want packaging
//    "react" : "react"
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
    externals: [
        "react",
	"react-addons-create-fragment",
	"react-addons-transition-group",
	{   
            "React" : {
		root: "react",
                commonjs2: "./react",
                commonjs: ["./react"],
		amd: "react"
            }
        },
        {
            "react-dom": {
                root: "react-dom",
                commonjs2: "./react-dom",
                commonjs: ["./react-dom"],
                amd: "react-dom"
            }
        }
    ],
	
//  plugins: [
//    new webpack.optimize.CommonsChunkPlugin("react", "react.bundle.js")
//  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;

