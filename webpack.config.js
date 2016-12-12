// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'material-ui';
var outputFile = libraryName + '.js';

var config = {
//  entry: __dirname + '/src/index.js',
// Below is how chunks would be configured, but overrides --output-filename
  entry: {
    "material-ui": __dirname + '/src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
    externals: [
	"react-addons-create-fragment",
	"react-addons-transition-group",
	{   
            "react" : {
		root: "React",
                commonjs2: "./react",
                commonjs: ["./react"],
		amd: "react"
            }
        },
        {
            "react-dom": {
                root: "ReactDOM",
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

