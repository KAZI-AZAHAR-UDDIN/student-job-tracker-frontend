import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://student-job-tracker-backend-d16d.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});