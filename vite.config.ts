import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Active les variables globales pour les tests
    environment: 'node', // Définit l'environnement Node.js pour les tests
    include: ['**/__tests__/**/*.test.js'], // Inclut les fichiers de test
    exclude: [...configDefaults.exclude, 'node_modules/**'], // Exclut les fichiers inutiles
    coverage: {
      enabled: true, // Active la collecte de couverture
      reporter: ['text', 'lcov'], // Formats de rapport de couverture
      reportsDirectory: '__tests__/coverage', // Répertoire de sortie des rapports
    },
    alias: {
      // Ajout d'alias pour les chemins relatifs (équivalent de moduleNameMapper)
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  },
});