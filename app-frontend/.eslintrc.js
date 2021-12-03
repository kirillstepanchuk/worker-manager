module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
  ],
  rules: {
    'no-console': 'off',
  },
};
