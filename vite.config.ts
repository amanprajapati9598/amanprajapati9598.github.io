import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.endsWith('Resume.pdf') || req.url.endsWith('resume.pdf'))) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Aman_Prajapati_Resume.pdf"');
          }
          next();
        });
      },
    },
  ],
  // GitHub Pages base: Set to '/<REPO-NAME>/' for production deployment
  // Replace <REPO-NAME> with your actual GitHub repository name
  base: process.env.NODE_ENV === 'production' ? '/<REPO-NAME>/' : '/',
});
