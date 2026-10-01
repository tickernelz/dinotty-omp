import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

const vueShim = fileURLToPath(new URL('./src/shims/vue.ts', import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: vueShim,
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: {
        sessionParser: fileURLToPath(new URL('./src/services/sessionParser.ts', import.meta.url)),
        sessionLoader: fileURLToPath(new URL('./src/services/sessionLoader.ts', import.meta.url)),
        paneSession: fileURLToPath(new URL('./src/services/paneSession.ts', import.meta.url)),
        overlayLayout: fileURLToPath(new URL('./src/services/overlayLayout.ts', import.meta.url)),
        overlayPosition: fileURLToPath(new URL('./src/services/overlayPosition.ts', import.meta.url)),
        tmuxLauncher: fileURLToPath(new URL('./src/services/tmuxLauncher.ts', import.meta.url))
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.mjs`
    },
    outDir: fileURLToPath(new URL('./.tmp-test-dist', import.meta.url)),
    emptyOutDir: true,
    target: 'es2022'
  }
});
