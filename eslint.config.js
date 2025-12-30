const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const prettierPlugin = require('eslint-plugin-prettier')
const eslintConfigPrettier = require('eslint-config-prettier')
const eslintPluginBoundaries = require('eslint-plugin-boundaries')
const eslintPluginUnusedImports = require('eslint-plugin-unused-imports')

module.exports = defineConfig([
  ...expoConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      boundaries: eslintPluginBoundaries,
      'unused-imports': eslintPluginUnusedImports
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**/*' },
        { type: 'entities', pattern: 'src/entities/**/*' },
        { type: 'features', pattern: 'src/features/**/*' },
        { type: 'widgets', pattern: 'src/widgets/**/*' },
        { type: 'shared', pattern: 'src/shared/**/*' }
      ]
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'import/no-internal-modules': [
        'error',
        {
          allow: [
            '**/index',
            '**/?(*.)+(container|page|api)',
            '**/shared/**',
            '**/features/**',
            '**/entities/**',
            '**/widgets/**',
            '@hookform/resolvers/zod',
            'expo-router'
          ]
        }
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          message: 'FSD: {{ fromType }} is not allowed to import {{ toType }}',
          rules: [
            { from: ['app'], allow: ['entities', 'features', 'widgets', 'shared'] },
            { from: ['widgets'], allow: ['entities', 'features', 'shared'] },
            { from: ['features'], allow: ['entities', 'shared'] },
            { from: ['entities'], allow: ['shared', 'entities'] },
            { from: ['shared'], allow: ['shared'] }
          ]
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
