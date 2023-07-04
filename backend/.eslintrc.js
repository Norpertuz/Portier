module.exports = {
  extends: ['@sanity/eslint-config-studio', 'airbnb-base','@babel/core'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,

  },
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 'warn',
    'linebreak-style': 0,
  },

};
