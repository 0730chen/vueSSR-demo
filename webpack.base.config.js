const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode:'development',
    entry: {
      main: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'web.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
          test:/\.css/,
          use:['style-loader','css-loader']
        }
      ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins:[
      new VueLoaderPlugin()
    ]
  }