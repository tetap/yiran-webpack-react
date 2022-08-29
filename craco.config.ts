const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const CracoLessPlugin = require('craco-less')

module.exports = {
  webpack: {
    plugins: [new NodePolyfillPlugin()],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    open: false
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
