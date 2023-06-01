import { Router } from 'express'
import { themeController } from '../controllers/themes'

export const themeRouter = Router()
themeRouter.get('/', themeController().getSiteThemes)
themeRouter.get('/user-theme/:id', themeController().getUserTheme)
themeRouter.post('/user-theme/', themeController().addUserTheme)
