module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint-config-prettier',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-prettier', 'react'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
  },
}
