import type { Router, Request, Response, NextFunction } from 'express'
import axios from 'axios'

const cookieKeys = ['uuid', 'authCookie']
export default async (
  router: Router,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookies =
      req.headers.cookie
        ?.split(';')
        ?.filter(cookie =>
          cookieKeys.some(key => cookie.trim().startsWith(`${key}=`))
        )
        ?.join('; ') ?? ''

    await axios.get('https://ya-praktikum.tech/api/v2/auth/user', {
      headers: {
        cookie: cookies,
      },
    })

    router(req, res, next)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status !== 200) {
        res.sendStatus(403)
        return
      }
    }
    if (!res.headersSent) {
      res.sendStatus(500)
    }
  }
}
