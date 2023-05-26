// ../client/vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import * as path from "path";
import dotenv from "dotenv";
import { viteStaticCopy } from "vite-plugin-static-copy";
var __vite_injected_original_dirname = "C:\\Users\\79805\\Desktop\\middle-yandex\\24-team-09-mf\\packages\\client";
dotenv.config();
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: "dist",
        format: "iife",
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name][extname]";
          }
          if (/\.(woff|woff2)$/.test(name ?? "")) {
            return "assets/fonts/[name][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          return "assets/[name][extname]";
        }
      }
    }
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  plugins: [
    react(),
    EnvironmentPlugin("all"),
    viteStaticCopy({
      targets: [
        {
          src: "sw.js",
          dest: ""
        }
      ]
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNzk4MDVcXFxcRGVza3RvcFxcXFxtaWRkbGUteWFuZGV4XFxcXDI0LXRlYW0tMDktbWZcXFxccGFja2FnZXNcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw3OTgwNVxcXFxEZXNrdG9wXFxcXG1pZGRsZS15YW5kZXhcXFxcMjQtdGVhbS0wOS1tZlxcXFxwYWNrYWdlc1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzc5ODA1L0Rlc2t0b3AvbWlkZGxlLXlhbmRleC8yNC10ZWFtLTA5LW1mL3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IEVudmlyb25tZW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVudmlyb25tZW50J1xyXG5cclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSdcclxuXHJcbmRvdGVudi5jb25maWcoKVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBkaXI6ICdkaXN0JyxcclxuICAgICAgICBmb3JtYXQ6ICdpaWZlJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uanNgLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5qc2AsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICh7IG5hbWUgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKC9cXC4oZ2lmfGpwZT9nfHBuZ3xzdmcpJC8udGVzdChuYW1lID8/ICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9pbWFnZXMvW25hbWVdW2V4dG5hbWVdJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKC9cXC4od29mZnx3b2ZmMikkLy50ZXN0KG5hbWUgPz8gJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ZvbnRzL1tuYW1lXVtleHRuYW1lXSdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgvXFwuY3NzJC8udGVzdChuYW1lID8/ICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9jc3MvW25hbWVdW2V4dG5hbWVdJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuQ0xJRU5UX1BPUlQpIHx8IDMwMDAsXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgIF9fU0VSVkVSX1BPUlRfXzogcHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQsXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIEVudmlyb25tZW50UGx1Z2luKCdhbGwnKSxcclxuICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgdGFyZ2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJ3N3LmpzJyxcclxuICAgICAgICAgIGRlc3Q6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1ksT0FBTyxXQUFXO0FBQzFaLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sdUJBQXVCO0FBRTlCLFlBQVksVUFBVTtBQUN0QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxzQkFBc0I7QUFOL0IsSUFBTSxtQ0FBbUM7QUFRekMsT0FBTyxPQUFPO0FBR2QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsY0FBSSx5QkFBeUIsS0FBSyxRQUFRLEVBQUUsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLGtCQUFrQixLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ3RDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksU0FBUyxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTSxPQUFPLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFBQSxFQUMzQztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04saUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQy9CO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixrQkFBa0IsS0FBSztBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
