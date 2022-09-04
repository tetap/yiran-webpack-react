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
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin']
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
