import type { Router } from 'express'
import axios from 'axios'

const cookieKeys = ['uuid', 'authCookie']

const paths = ['/forum'];

export default (router: Router) =>
  paths.forEach(path =>
    router.use(path, async (req, res, next) =>{
      try {
        const cookies = req.headers.cookie
          ?.split(';')
          ?.filter(cookie => cookieKeys.some(key => cookie.trim().startsWith(`${key}=`)))
          ?.join('; ') ?? ''

        await axios.get(
          'https://ya-praktikum.tech/api/v2/auth/user',
          {
            headers: {
              cookie: cookies
            }
          }
        )

        next();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status !== 200) {
            res.sendStatus(403)
            return;
          }
        }
        if (!res.headersSent) {
          res.sendStatus(500)
        }
      }
    }))
