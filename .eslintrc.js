module.exports = {
  extends: ['next', 'plugin:prettier/recommended'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
