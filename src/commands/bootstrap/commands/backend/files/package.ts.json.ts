export default {
  name: 'centaur-package',
  version: '0.0.0',
  description: 'Automatically generated by graphql-editor-cli',
  main: 'index.js',
  scripts: {
    start: 'stucco',
    build: 'tsc',
    watch: 'tsc --watch',
    update: 'gecli models && gecli schema && gecli typings',
  },
  author: 'GraphQL Editor Centaur Generator',
  license: 'ISC',
  devDependencies: {
    '@types/node': '^12.6.9',
    '@types/node-fetch': '^2.5.7',
    '@typescript-eslint/eslint-plugin': '^2.9.0',
    '@typescript-eslint/parser': '^2.9.0',
    eslint: '^6.7.1',
    'eslint-config-prettier': '^6.7.0',
    'eslint-plugin-prettier': '^3.1.1',
    'graphql-zeus': 'latest',
    prettier: 'latest',
    'ts-node': 'latest',
    typescript: 'latest',
  },
  dependencies: {
    'node-fetch': '^2.6.0',
    'stucco-js': 'latest',
  },
};
