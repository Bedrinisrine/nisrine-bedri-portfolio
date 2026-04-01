import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// './' = relative asset URLs (works in subfolders). For GitHub Pages you can use base: '/your-repo/'
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-github-pages',
      closeBundle() {
        const dist = resolve(process.cwd(), 'dist')
        try {
          copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
        } catch {
          /* dist missing in dry runs */
        }
      },
    },
  ],
  base: './',
})