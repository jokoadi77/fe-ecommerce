import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  proxy: {
    // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    '/api': {
      target: 'https://be-olshop.vercel.app/',
      changeOrigin: true,
    },
  },
}
})
