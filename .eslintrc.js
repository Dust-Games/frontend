module.exports = {
  root: true,
  env: { node: true },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    '@vue/typescript',
    'plugin:vue/essential'
    // 'plugin:prettier/recommended'
    // 'plugin:vue-i18n/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
     'comma-dangle': ['error', 'never']
    // "eol-last": ["error", "never"],
    // 'vue-i18n/no-dynamic-keys': 'never',
    // 'vue-i18n/no-raw-text': 'never',
    // 'vue-i18n/no-unused-keys': ['error', { extensions: ['.js', '.vue'] }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    // {
    //   files: ["**/__tests__/*.{j,t}s?(x)"],
    //   env: { mocha: true }
    // }
  ],
  settings: {
    // "vue-i18n": {
    //   localeDir: "./locales/*.json" // extention is glob formatting!
    // }
  }
};
