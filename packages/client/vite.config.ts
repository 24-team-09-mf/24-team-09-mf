import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

import * as path from 'path'
import dotenv from 'dotenv'
import { viteStaticCopy } from 'vite-plugin-static-copy'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
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
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    'process.env.OAUTH_REDIRECT_URL': process.env.OAUTH_REDIRECT_URL,
    'process.env.NODE_API_URL': process.env.NODE_API_URL,
  },

  plugins: [
    react(),
    {
      name: 'html-inject-nonce-into-script-tag',
      enforce: 'post',
      transformIndexHtml(html: string) {
        const regex = /<script(.*?)/gi
        const replacement = '<script nonce="__SERVER_NONCE__"$1'
        return html.replace(regex, replacement)
      },
    },
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
    alias: {
      '@': path.resolve(__dirname, 'src'),
      path: path.resolve(__dirname, 'path-browserify.txt'),
      url: path.resolve(__dirname, 'path-browserify.txt'),
      fs: path.resolve(__dirname, 'path-browserify.txt'),
    },
  },
})
