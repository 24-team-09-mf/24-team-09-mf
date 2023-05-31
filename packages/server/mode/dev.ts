import type { Express, Request } from 'express'
import type { ViteDevServer } from 'vite'
import path from 'path'
import { createServer as createViteServer } from 'vite'
import fs from 'fs'

export default (app: Express) => {
  let vite: ViteDevServer
  let srcPath: string

  async function preload() {
    srcPath = path.dirname(require.resolve('client/ssr.tsx'))
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }

  async function resolve(
    url: string
  ): Promise<
    [
      string,
      (args: {
        request: Request
        repository: any
      }) => Promise<[string, string, object]>
    ]
  > {
    let template: string

    template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
    template = await vite.transformIndexHtml(url, template)
    const render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
      .render

    return [template, render]
  }

  function catchError(e: unknown) {
    vite.ssrFixStacktrace(e as Error)
  }

  return { preload, resolve, catchError }
}
