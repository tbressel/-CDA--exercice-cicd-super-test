import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

const globalsNode = globals.node;
const globalsBrowser = globals.browser;

export default defineConfig([
  globalIgnores(["__tests__/**"]),

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globalsNode,
        ...globalsBrowser,
      },
    },
    rules: {
    //  "no-console": "warn",
      "no-unused-vars": "error", // erreur pour une variable non utilisée
      "eqeqeq": ["error", "always"], // erreur pour une utilisation de comparaison autre que !== ou ===
      "no-undef": "error", // erreur pour l'utilisation d'une variable non définie.
      "prefer-const": "error",  // erreur quand une variable n'est pas ré assigné.
      "no-empty-function": "warn", // interdit les fonction vide
      "max-params": ["warn", 4], // limiter le nombre de paramètre dasn les focntion 
      "complexity": ["warn", 2], // empêche trop de condition imbriquée DANS UNE FONCTION
    },
  },
]);

// import { defineConfig, globalIgnores } from "eslint/config";

// export default defineConfig([
//   // 👇 Ignore global pour __tests__
//   globalIgnores(["__tests__/**"]),

//   {
//     files: ["**/*.{js,mjs,cjs}"],
//     languageOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//     rules: {
//        rules: {
//       //"no-console": "warn",
//       "no-unused-vars": "error", // erreur pour une variable non utilisée
//       "eqeqeq": ["error", "always"], // erreur pour une utilisation de comparaison autre que !== ou ===
//       "no-undef": "error", // erreur pour l'utilisation d'une variable non définie.
//       "prefer-const": "error",  // erreur quand une variable n'est pas ré assigné.
//       "no-empty-function": "warn", // interdit les fonction vide
//       "max-params": ["warn", 4], // limiter le nombre de paramètre dasn les focntion 
//       "complexity": ["warn", 2], // empêche trop de condition imbriquée DANS UNE FONCTION
//     },
//     },
//   },
// ]);
