import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve from root when using a custom domain (GitHub Pages with CNAME)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
