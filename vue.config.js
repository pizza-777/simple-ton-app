const { defineConfig } = require('@vue/cli-service')
//const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  devServer: { //config for ngrok
    allowedHosts: 'all',//
    port: 8080,
    host: "localhost"

  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: "Simple ton app",
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/simple-ton-app/' : '/',
  configureWebpack: {
    plugins: [
      // new CopyPlugin(
      //   {
      //     patterns: [
      //       {
      //         from: 'node_modules/@eversdk/lib-web/eversdk.wasm',
      //         to: './'
      //       }
      //     ],
      //   }
      // )
    ]
  }
})
