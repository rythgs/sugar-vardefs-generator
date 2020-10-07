module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.d.ts', '.css'],
      },
    },
  },
  rules: {
    // common
    'prefer-const': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-use-before-define': 'off',
    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    // react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    // jsx
    'jsx-a11y/anchor-is-valid': 'off',
  },
}
