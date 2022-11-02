const { aliasJest, aliasWebpack } = require('react-app-alias')

const aliasMap = {
  '@assets': 'src/assets',
  '@colors': 'src/colors',
  '@components': 'src/components',
  '@hooks': 'src/hooks',
  '@mocks': 'src/mocks',
  '@pages': 'src/pages',
  '@redux': 'src/redux',
  '@services': 'src/services',
  '@root': 'src'
}

const options = {
  alias: aliasMap
}

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)
