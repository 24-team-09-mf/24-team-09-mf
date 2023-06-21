const changeAvatarDomain = (url: string | undefined) => {
  if (!url) return undefined
  const domain: URL = new URL(url)
  return `https://danger-in-jungle.ya-praktikum.tech${domain.pathname}`
}

export default changeAvatarDomain
