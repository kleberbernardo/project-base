module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['eslint-plugin-import-helpers', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {
      'printWidth': 80,
      'tabWidth': 2,
      'useTabs': false,
      'singleQuote': true,
      'trailingComma': 'all',
      'bracketSpacing': true,
      'bracketSameLine': true,
      'rangeStart': 0,
      'insertPragma': false,
      'arrowParens': 'always',
      'quoteProps': 'as-needed',
      'semi': true,
      'endOfLine': 'auto',
      'proseWrap': 'preserve'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/'],
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  }
};
