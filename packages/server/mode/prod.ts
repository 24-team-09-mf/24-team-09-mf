import type { Express, Request } from 'express'
import path from 'path'
import fs from 'fs'
import express from 'express'

export default (app: Express) => {
  let distPath: string
  let ssrClientPath: string

  async function preload() {
    distPath = path.dirname(require.resolve('client/dist/index.html'))
    ssrClientPath = require.resolve('client/dist-ssr/client.cjs')

    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
    app.use('/sw.js', express.static(path.resolve(distPath, 'sw.js')))
  }

  async function resolve(): Promise<
    [
      string,
      (args: {
        request: Request
        repository: any
      }) => Promise<[string, string, object]>
    ]
  > {
    const template = fs.readFileSync(
      path.resolve(distPath, 'index.html'),
      'utf-8'
    )
    const render = (await import(ssrClientPath)).render

    return [template, render]
  }

  function catchError(e: unknown) {
    console.error(e)
  }

  return { preload, resolve, catchError }
}
