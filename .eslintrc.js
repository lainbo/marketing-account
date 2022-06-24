module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    '@antfu',
    './.eslintrc-auto-import.json',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        arrowParens: 'avoid',
      },
    ],
    eqeqeq: ['error', 'always'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
}
