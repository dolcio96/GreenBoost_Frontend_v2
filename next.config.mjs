import path from 'path';

// Ottieni il percorso corrente (equivalente di __dirname)
const currentDir = new URL('.', import.meta.url).pathname;

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(currentDir, 'src/app/component'), // Cambiato per riflettere la struttura
      '@layouts': path.resolve(currentDir, 'src/app/layouts'),    // Modifica per il percorso corretto
      '@utils': path.resolve(currentDir, 'src/app/utils'),    // Modifica per il percorso corretto
      '@': path.resolve(currentDir, 'src'),                        // Modifica per il percorso della root 'src'
    };
    return config;
  },
};

export default nextConfig;