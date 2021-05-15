const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@util': path.resolve(__dirname, './util'),
      '@components': path.resolve(__dirname, './components'),
      '@env': path.resolve(__dirname, './environment.js'),
      "@styles": path.resolve(__dirname, './styles'),
    }
    return config
  },
}