import { Router } from 'express'
import { themeController } from '../controllers/themes'

export const themeRouter = Router()
themeRouter.get('/', themeController().getSiteThemes)
themeRouter.get('/userTheme/:id', themeController().getUserTheme)
themeRouter.post('/userTheme', themeController().addUserTheme)
