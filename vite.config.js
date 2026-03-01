import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mission: resolve(__dirname, 'mission/index.html'),
        architecture: resolve(__dirname, 'architecture/index.html'),
        research: resolve(__dirname, 'research/index.html'),
        applications: resolve(__dirname, 'applications/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  }
})