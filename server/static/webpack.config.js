const path = require('path');

module.exports = {
    mode: "development",
    entry: __dirname + '/src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        proxy: {
            '/static/**': {
                target: 'http://localhost:5000/',
                pathRewrite: { '^/static': '' },
                secure: false,
                logLevel: 'debug'
            }
        }
    },
};