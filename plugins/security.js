module.exports = {
  plugins: [
    // ESLint rules for Node Security
    // https://github.com/nodesecurity/eslint-plugin-security
    'security'
  ],
  extends: ['plugin:security/recommended'],
  rules: {
    'security/detect-eval-with-expression': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off'
  }
};
