import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    rules: {
      //"no-console": "warn",
      "no-unused-vars": "error", // erreur pour une variable non utilisée
      "eqeqeq": ["error", "always"], // erreur pour une utilisation de comparaison autre que !== ou ===
      "no-undef": "error", // erreur pour l'utilisation d'une variable non définie.
      "prefer-const": "error",  // erreur quand une variable n'est pas ré assigné.
      "no-empty-function": "warn", // interdit les fonction vide
      "max-params": ["warn", 4], // limiter le nombre de paramètre dasn les focntion 
      "complexity": ["warn", 2], // empêche trop de condition imbriquée DANS UNE FONCTION
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.browser }
  },
]);
