const path = require('path')

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/Components/Header/**/*.js',
    '**/Components/Footer/**/*.js',
    '**/Components/Navigation/**/*.js',
    '**/Components/ColorsList/Color.js',
    '**/Components/SizesList/Size.js',
    '**/Components/TabKikoi/!(TabKikoiContainer.js)',
    '**/Components/HeroCarousel/!(HeroCarousel.js)',
    '**/Components/SliderIni/!(SliderIni.js)'
  ],
  template: './src/rsg-templates/index.html'
}
