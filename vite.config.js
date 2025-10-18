import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      proxy: {
        '/api': {
          target: 'http://henilp.dev',
          changeOrigin: true,
          secure: false
        }
      }
    },
    plugins: [react(), tailwindcss()]
  }
})
