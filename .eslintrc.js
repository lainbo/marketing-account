module.exports = {
  root: true,
  env: {
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    '@antfu',
    './.eslintrc-auto-import.json',
  ],
}
