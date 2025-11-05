import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import prettierPluginRecomended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import eslint from '@eslint/js';
import globals from 'globals';
import path from 'path';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylisticTypeChecked,
  prettierPluginRecomended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: path.resolve(process.cwd()),
        project: ["./tsconfig.json", "./tsconfig.cjs.json", "./tsconfig.esm.json", "./tsconfig.test.json"]
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "lines-between-class-members": ["error", "always"],
      "@typescript-eslint/no-throw-literal": "off",
      "unused-imports/no-unused-imports": "error",
      "no-promise-executor-return": "off",
      "default-param-last": "off",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unused-vars": "off",
      "require-await": "warn",
      "@typescript-eslint/no-redeclare": "error"
    }
  },
  globalIgnores([
    "dist",
    "node_modules",
    ".github",
    ".idea",
    ".vscode",
    ".yarn",
  ])
]);
