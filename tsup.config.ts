import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  clean: true,
  entry: {
    server: 'server.ts',
    index: 'index.ts',
    build: 'build/index.js'
  }
})
