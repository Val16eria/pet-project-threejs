import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist'], // Игнорируем директорию dist
    files: ['**/*.{ts,tsx}'], // Файлы, к которым применяется конфигурация
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 2020, // Поддержка ES2020
        sourceType: 'module', // Используем модули
      },
    },
    plugins: {
      ts: ts,
      import: importPlugin, // Подключаем плагин import
    },
    rules: {
      'quotes': ['error', 'double'], // Двойные кавычки
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always', // Пустая строка между группами
        },
      ],
      'indent': ['error', 2], // Два пробела отступ
      'object-curly-spacing': ['error', 'always'], // Пробелы между фигурными скобками
      'semi': ['error', 'always'], // Точка с запятой в конце выражений
    },
  },
];
