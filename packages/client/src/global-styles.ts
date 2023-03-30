import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
${normalize()}

  :root {
    --font-title: 'Oswald', sans-serif;
    --color-text: #333333;

    --color-green1: #D1E3AC;
    --color-green1-rgb: 209, 227, 172;
    --color-green2: #579945;
    --color-green2-rgb: 87, 153, 69;

    --color-gray1: #FAFAFA;
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
  font-size: 0.8333vw;
  font-weight: 500;
  font-style: normal;
  line-height: 19px;
  color: #000;
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
  cursor: auto;
  display: inline-block;
  text-decoration: none;
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

@font-face {
  font-family: '04B03';
  src: url('public/fonts/04B03.TTF') format('truetype');
}
`
