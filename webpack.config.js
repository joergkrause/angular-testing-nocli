var copyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var webpack = require("webpack");

module.exports = () => {
  return {
    devtool: "source-map",
    mode: 'production',
    performance: { hints: false },
    stats: {
      chunks: false,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      modules: false
    },
    entry: {
      main: "./src/main.ts",
      vendor: "./src/vendor.ts"
    },
    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist/",
      publicPath: "/dist/"
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          enforce: "pre",
          loader: "tslint-loader",
          options: {
            configFile: "tslint.json",
            emitErrors: true,
            failOnHint: false
          }
        },
        {
          test: /\.ts$/,
          loader: "awesome-typescript-loader",
          options: {
            silent: true
          }
        },
        {
          test: /\.ts$/,
          loader: "angular2-template-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader?minimize=false"
        },
        {
          test: /\.css$/,
          loaders: ['to-string-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // This is for Angular 5 only!!
        /\@angular(\\|\/)core(\\|\/)esm5/,
        __dirname + "/src", // location of your src
        {} // a map of your routes
      ),
      new copyWebpackPlugin([
        { from: "src/assets/css/site.css", to: "../dist/assets/css/site.css" },
        { from: "node_modules/bootstrap/dist/css/bootstrap.css", to: "../dist/assets/css" },
        { from: "src/index.webpack.html", to: "../dist/index.html" }
      ]),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 6, // specify one of: 5, 6, 7 or 8
          keep_classnames: false,
          keep_fnames: false,
          ie8: false,
          safari10: false,
          toplevel: false,
          warnings: false,
        }
      })
    ]
  };
};