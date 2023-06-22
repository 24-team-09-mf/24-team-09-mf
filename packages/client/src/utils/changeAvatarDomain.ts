const changeAvatarDomain = (url: string | undefined) => {
  if (!url) return ''
  const domain: URL = new URL(url)
  return `${domain.pathname}`
}

export default changeAvatarDomain
