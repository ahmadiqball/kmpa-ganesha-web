const { vinicuncaESLint } = require('@vinicunca/eslint-config');

module.exports = vinicuncaESLint({
  options: {
    module: ['eslint-plugin-node'],
    react: true,
    typescript: {
      tsconfigPath: ['tsconfig.eslint.json'],
    },
  },

  unocss: true,

  rules: {
    'node/prefer-global/process': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-classes': 'off',
    'ts/no-use-before-define': 'off',
  },
}, {
  files: ['**/sanity.entity.ts'],
  rules: {
    'ts/consistent-type-definitions': 'off',
    'ts/no-use-before-define': 'off',
  },
});
