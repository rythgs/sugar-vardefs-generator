module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'import', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/core-modules': ['app'],
    'import/resolver': {
      node: {
        paths: ['./', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
      },
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.d.ts'],
      },
    },
  },
  rules: {
    // prettier
    'prettier/prettier': 'error',
    // common
    'prefer-const': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // react
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    // import
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/imports-first': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'error',
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
    // import sort
    'simple-import-sort/sort': 'error',
  },
}
