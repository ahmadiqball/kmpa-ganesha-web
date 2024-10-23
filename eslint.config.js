const { vinicuncaESLint } = require('@vinicunca/eslint-config');

module.exports = vinicuncaESLint({
  options: {
    module: ['eslint-plugin-node'],
    react: true,
    typescript: {
      tsconfigPath: ['tsconfig.eslint.json'],
    },
  },

  rules: {
    'node/prefer-global/process': 'off',
  },

  userConfigs: [
    {
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'ts/restrict-plus-operands': 'off',
        'vinicunca/cognitive-complexity': 'off',
      },
    },
  ],
});
