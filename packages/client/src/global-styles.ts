import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { Fonts } from '@/fonts'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  ${Fonts}

  html[data-theme='light'] {
    --color-text: : #333333;
    --bg-color: #fff;
    --color-text-rgb: 0, 0, 0;
    --color-green1: #D1E3AC;
    --color-green1-rgb: 209, 227, 172;
    --color-green2: #579945;
    --color-green2-rgb: 87, 153, 69;
    --color-gray1: #FAFAFA;
    --color-green3: #FFF;
    --color-green4: #FFF;
}

html[data-theme='dark'] {
  --color-text: #FFFFFF;
  --bg-color: #333333;
  --color-text-rgb: 255, 255, 255;
  --color-green1: #D1E3AC;
  --color-green1-rgb: 209, 227, 172;
  --color-green2: #579945;
  --color-green2-rgb: 87, 153, 69;
  --color-gray1: #FAFAFA;
  --color-green3: #525944;
  --color-green4: #edf4de;
}

  :root {
    --font-title: 'Oswald', sans-serif;
  }

  html,
  body {

  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 19px;
  background-color: var(--bg-color);
  color: var(--color-text);
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1024px) {
    font-size: 2.0833vw;
  }

  @media (max-width: 767px) {
    font-size: 4.4444vw;
  }
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--color-text)
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  [contentEditable][placeholder]:empty:before {
      content: attr(placeholder);
      color: #8c8c8c;
  }
`

export const H1 = styled.h1((props: { marginBottom?: string }) => {
  const marginBottom = props.marginBottom ? props.marginBottom : '1.875rem'
  return `
    font-family: var(--font-title);
    font-size: 1.875rem;
    line-height: 2.75rem;
    font-weight: 400;
    margin-bottom: ${marginBottom};
  `
})

export const H2 = styled.h2((props: { marginBottom?: string }) => {
  const marginBottom = props.marginBottom ? props.marginBottom : '1.875rem'
  return `
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: ${marginBottom};
  `
})
