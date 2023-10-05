const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.ts',
      title: "Simple ton app",
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
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
