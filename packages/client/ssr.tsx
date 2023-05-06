import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'

export async function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <div>TEST SSR</div>
    </StrictMode>
  )

  return [html, '<!-- styles -->']
}
