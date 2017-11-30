const path = require('path')

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/Components/Header/**/*.js',
    '**/Components/Footer/**/*.js',
    '**/Components/Navigation/**/*.js',
    '**/Components/ColorsList/Color.js'
  ],
  template: './src/rsg-templates/index.html'
}
