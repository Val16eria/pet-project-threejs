import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      ts: ts,
      import: importPlugin,
    },
    rules: {
      'quotes': ['error', 'double'],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always',
        },
      ],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'always'],
    },
  },
];
