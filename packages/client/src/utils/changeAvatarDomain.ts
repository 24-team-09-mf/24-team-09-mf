const changeAvatarDomain = (url: string | undefined) => {
  if(!url) return undefined;
  const domain: URL = new URL(url)
  return `${process.env.NODE_API_URL}${domain.pathname}`
}

export default changeAvatarDomain;
