/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    silent: true,
    reporters: ['default', 'junit'],
  },
};
