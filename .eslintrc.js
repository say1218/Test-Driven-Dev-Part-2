module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      node: true,
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
    },
    settings: {
      react: {
        version: '16.4.2',
      },
    },
};

//sourceType: 'module' tells ESLint that our code will run in an environment that supports ES2015 (a.k.a. ES6)

//The set of recommended rules is designed to catch a number of common React coding mistakes. Additionally, eslint-plugin-react can make suggestions targeted to the React version you’re using if you specify it in a settings block: