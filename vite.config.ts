import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      imports: ['vue', '@vueuse/core'],
    }),
    Components({
      resolvers: [ArcoResolver({
        sideEffect: true,
      })],
    }),
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        'utils': [/src\/utils/],
        'assets': [/src\/assets/],
        'component-library': ['@arco-design/web-vue'],
      },
    }),
  ],
})
