module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none', // 'none' or 'semi' or 'comma'
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi', // 'semi' or 'comma'
            requireLast: false,
          },
        },
      ],
    },
  }
  