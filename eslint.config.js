import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import {defineConfig} from 'eslint/config'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'


export default defineConfig([
    {files: ['**/*.{js,mjs,cjs}'], plugins: {js}, extends: ['js/recommended']},
    {files: ['**/*.{js,mjs,cjs}'], languageOptions: {globals: globals.node}},
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            '@stylistic': stylistic,
            'simple-import-sort': eslintPluginSimpleImportSort
        },
        rules: {
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/comma-dangle': ['error', 'never'],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error'
        }
    }
])
