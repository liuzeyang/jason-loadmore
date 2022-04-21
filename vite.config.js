import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'jason-loadmore',
      fileName: (format) => `jason-loadmore.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react'], 
      output: {
        globals: {
          'react': 'React',
        }
      }     
    }
  }
})
