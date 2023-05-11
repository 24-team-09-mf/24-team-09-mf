module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint', 'testing-library', 'jest-dom'],
  ignorePatterns: [
    'packages/client/dist',
    'packages/server/dist',
    '**/__test__',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
  },
}
