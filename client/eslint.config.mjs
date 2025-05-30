import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from '@eslint/js';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import securityPlugin from 'eslint-plugin-security';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      security: securityPlugin,
      sonarjs: sonarjsPlugin,
      'unused-imports': unusedImportsPlugin,
      'eslint-comments': eslintCommentsPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: '.',
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'external', // External modules (e.g., lodash, axios)
            'builtin', // Node.js built-in modules (e.g., fs, path)
            'internal', // Internal project modules
            'parent', // Parent imports (e.g., ../utils)
            'sibling', // Sibling imports (e.g., ./Component)
            'index', // Index imports (e.g., ./, ../index)
            'object', // Imports that assign variables from an object
            'type', // TypeScript type imports
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@mui/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'api/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'store/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'theme/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'contexts/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '**/*.scss',
              group: 'type',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-multi-comp': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'max-lines': ['error', { max: 500, skipBlankLines: true }],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/prop-types': 'off',
      'capitalized-comments': ['off'],
      'max-params': 'off',
      '@typescript-eslint/max-params': 'off',
      'react/function-component-definition': ['off'],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'no-warning-comments': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      'no-console': ['warn', { allow: ['warn'] }],
      '@typescript-eslint/no-use-before-define': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-sort-props': 'off',
      'no-underscore-dangle': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-bind': 'off',
      'no-magic-numbers': 'off',
      'no-undefined': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'id-length': 'off',
      '@typescript-eslint/strict-boolean-expressions': ['error'],
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'max-statements': 'off',
      'eslint-comments/no-unused-disable': 'error',
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/no-duplicate-string': 'error',
      'prettier/prettier': ['error', { endOfLine: 'auto', printWidth: 120 }],
      '@typescript-eslint/naming-convention': ['off'],
      'react/jsx-no-literals': 'off',
      'react/forbid-component-props': ['off'],
      'react/jsx-max-depth': 'off',
      'one-var': ['off'],
      'sort-imports': 'off',
      'sort-keys': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit'
        }
      }],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }],
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/member-ordering': 'error',
      'no-unused-expressions': 'off',
      'prefer-object-spread': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      'no-extra-boolean-cast': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      'import/no-duplicates': 'error',
      'no-ternary': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'security/detect-object-injection': 'error',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-eval-with-expression': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      'react-hooks/exhaustive-deps': ['error', {
        additionalHooks: '(useRecoilCallback|useResetRecoilState)'
      }],
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'func-style': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'react/prefer-read-only-props': 'off',
      '@typescript-eslint/no-misused-promises': ['error', {
        checksVoidReturn: false
      }],
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '.next/', 'out/', 'vite.config.ts', 'next.config.js', 'next.config.mjs']
  }
];

export default eslintConfig;
