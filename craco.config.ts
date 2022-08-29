const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  webpack: {
    plugins: [new NodePolyfillPlugin()],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    open: false
  }
}
