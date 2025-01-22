import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin, { languages } from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languagesOptions: { parseOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',
    },
  },
];
