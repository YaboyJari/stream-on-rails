import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    basicSsl()
  ],
  server: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return '[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
              return '[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        },
      },
    },
  },
})
