import type { Request, Response, NextFunction } from 'express'

export const csp = (nonce: string) =>
  function (_req: Request, res: Response, next: NextFunction): void {
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; font-src 'self' data:; img-src 'self' * data:; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; frame-src 'self'`
    )
    next()
  }
