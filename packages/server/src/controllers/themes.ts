import { SiteThemeModel } from '../models/themes'
import { UserThemeModel } from '../models/userTheme'

export const getTheme = async (user_id: string) => {
  return UserThemeModel.findOne({
    where: { user_id },
    include: [{ model: SiteThemeModel, attributes: ['theme_name'] }],
  })
}

export const postTheme = async (theme_name: string, user_id: string) => {
  const theme = await SiteThemeModel.findOne({
    where: { theme_name },
  })

  return (
    theme &&
    (await UserThemeModel.create({
      theme_id: theme.id,
      user_id,
    }))
  )
}
