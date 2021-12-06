module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
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
    'react',
  ],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
