import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base: Set to '/<REPO-NAME>/' for production deployment
  // Replace <REPO-NAME> with your actual GitHub repository name
  base: process.env.NODE_ENV === 'production' ? '/<REPO-NAME>/' : '/',
})
