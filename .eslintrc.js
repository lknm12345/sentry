module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/internal-regex': '^@src/',
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: [
    '**/swagger/**',
    '**/lang/app/_enum/**',
    '/packages/icon/**',
  ],
  rules: {
    //esLint
    semi: 'off',
    quotes: 'off',
    'comma-dangle': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'anywhere',
      },
    ],

    // prettier
    'prettier/prettier': [
      'error',
      {
        formatOnSave: true,
        printWidth: 80,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        tabWidth: 2,
        bracketSameLine: false,
        singleQuote: true,
      },
    ],

    //import
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],

    //typescript
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  globals: {
    NodeJS: true,
  },
};
