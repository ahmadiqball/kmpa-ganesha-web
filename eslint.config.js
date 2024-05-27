const { vinicuncaESLint } = require('@vinicunca/eslint-config');

module.exports = vinicuncaESLint({
  options: {
    react: true,

    typescript: {
      tsconfigPath: ['tsconfig.eslint.json'],
    },
  },

  userConfigs: [
    {
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'ts/restrict-plus-operands': 'off',
        'vinicunca/cognitive-complexity': 'off',
      },
    },
    {
      files: ['**/*.spec.?([cm])[jt]s?(x)'],
      rules: {
        'no-await-in-loop': 'off',
        'ts/await-thenable': 'off',
        'ts/no-misused-promises': 'off',
        'unicorn/prefer-dom-node-text-content': 'off',
        'vinicunca/no-duplicate-string': 'off',
      },
    },
  ],
});
