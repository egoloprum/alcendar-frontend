const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const prettierPlugin = require('eslint-plugin-prettier')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = defineConfig([
  ...expoConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true // This will read from .prettierrc
        }
      ]
    }
  },
  eslintConfigPrettier,
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '.expo/*',
      'web-build/*',
      'coverage/*',
      '*.log',
      '*.lock',
      '*.min.js',
      '*.min.js.map',
      '*.snap',
      'index.js'
    ]
  }
])
