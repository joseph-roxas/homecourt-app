// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // binds to 0.0.0.0
    port: 5173,      // keep default or change if needed
    strictPort: true // fail if port taken, so you notice
  }
})
