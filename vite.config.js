import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/upgrade-tool/',  // replace <REPO> with your GitHub repo name
  plugins: [react()]
});