import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',   // ✅ correct
      name: 'ZureUI',          // ✅ PascalCase for global name
      fileName: 'index',       // ✅ important fix (see below)
      formats: ['es', 'cjs']   // ✅ support both module types
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})