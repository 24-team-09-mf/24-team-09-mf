// ../client/vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import * as path from 'path'
import dotenv from 'dotenv'
import { viteStaticCopy } from 'vite-plugin-static-copy'
var __vite_injected_original_dirname =
  '/home/erik/WORK/my_projects/yandex/Arcade-2D-game/packages/client'
dotenv.config()
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        format: 'iife',
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name][extname]'
          }
          if (/\.(woff|woff2)$/.test(name ?? '')) {
            return 'assets/fonts/[name][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name][extname]'
          }
          return 'assets/[name][extname]'
        },
      },
    },
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    viteStaticCopy({
      targets: [
        {
          src: 'sw.js',
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__vite_injected_original_dirname, 'src'),
      },
    ],
  },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZXJpay9XT1JLL215X3Byb2plY3RzL3lhbmRleC9BcmNhZGUtMkQtZ2FtZS9wYWNrYWdlcy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2VyaWsvV09SSy9teV9wcm9qZWN0cy95YW5kZXgvQXJjYWRlLTJELWdhbWUvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2VyaWsvV09SSy9teV9wcm9qZWN0cy95YW5kZXgvQXJjYWRlLTJELWdhbWUvcGFja2FnZXMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBFbnZpcm9ubWVudFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lbnZpcm9ubWVudCdcblxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5J1xuXG5kb3RlbnYuY29uZmlnKClcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGRpcjogJ2Rpc3QnLFxuICAgICAgICBmb3JtYXQ6ICdpaWZlJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICAgIGlmICgvXFwuKGdpZnxqcGU/Z3xwbmd8c3ZnKSQvLnRlc3QobmFtZSA/PyAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ltYWdlcy9bbmFtZV1bZXh0bmFtZV0nXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgvXFwuKHdvZmZ8d29mZjIpJC8udGVzdChuYW1lID8/ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvZm9udHMvW25hbWVdW2V4dG5hbWVdJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL1xcLmNzcyQvLnRlc3QobmFtZSA/PyAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2Nzcy9bbmFtZV1bZXh0bmFtZV0nXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXVtleHRuYW1lXSdcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAwLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBfX1NFUlZFUl9QT1JUX186IHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIEVudmlyb25tZW50UGx1Z2luKCdhbGwnKSxcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICdzdy5qcycsXG4gICAgICAgICAgZGVzdDogJycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVgsT0FBTyxXQUFXO0FBQ3ZZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sdUJBQXVCO0FBRTlCLFlBQVksVUFBVTtBQUN0QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxzQkFBc0I7QUFOL0IsSUFBTSxtQ0FBbUM7QUFRekMsT0FBTyxPQUFPO0FBR2QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsY0FBSSx5QkFBeUIsS0FBSyxRQUFRLEVBQUUsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLGtCQUFrQixLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ3RDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksU0FBUyxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTSxPQUFPLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFBQSxFQUMzQztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04saUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQy9CO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixrQkFBa0IsS0FBSztBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
