module.exports = {
  plugins: ['mocha'],
  extends: ['plugin:mocha/recommended'],
  rules: {
    'mocha/no-exclusive-tests': 'error'
  }
};
