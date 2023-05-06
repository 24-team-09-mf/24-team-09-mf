import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'

export async function render() {
  const html = renderToString(
    <StrictMode>
      <div>TEST SSR</div>
    </StrictMode>
  )

  return [html, '<!-- styles -->']
}
