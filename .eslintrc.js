module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier', // eslint-config-prettier를 사용하도록 추가
  ],
  rules: {
    'no-unused-vars': 0,
    'linebreak-style': 0,
  },
};
