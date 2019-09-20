module.exports = {
  extends: ['airbnb'],
  rules: {
    'quote-props': [2, 'consistent-as-needed'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    //'prefer-const': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'spaced-comment': ['error', 'never']
    //  quotes: [2, 'single', { avoidEscape: true }],
  }
};
