module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            env: {
                browser: true,
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:solid/typescript',
                'eslint-config-prettier',
            ],
        },
    ],
}
