import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(() => {
  return {
    plugins: [
      tsconfigPaths(),
      react(),
      legacy(),
      svgrPlugin({ svgrOptions: { icon: true } }),
    ],
  };
});
