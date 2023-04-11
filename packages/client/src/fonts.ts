import Font04B03Woff from './assets/fonts/04b03.woff'
import Font04B03Woff2 from './assets/fonts/04b03.woff2'

import OpenSansMediumWoff from './assets/fonts/OpenSans-Medium.woff'
import OpenSansMediumWoff2 from './assets/fonts/OpenSans-Medium.woff2'
import OpenSansRegularWoff from './assets/fonts/OpenSans-Regular.woff'
import OpenSansRegularWoff2 from './assets/fonts/OpenSans-Regular.woff2'
import OswaldMediumWoff from './assets/fonts/Oswald-Medium.woff'
import OswaldMediumWoff2 from './assets/fonts/Oswald-Medium.woff2'
import OswaldRegularWoff from './assets/fonts/Oswald-Regular.woff'
import OswaldRegularWoff2 from './assets/fonts/Oswald-Regular.woff2'
import OswaldSemiBoldWoff from './assets/fonts/Oswald-SemiBold.woff'
import OswaldSemiBoldWoff2 from './assets/fonts/Oswald-SemiBold.woff2'

export const Fonts = `

  @font-face {
    font-family: '04B03';
    src: url(${Font04B03Woff2}) format('woff2'),
        url(${Font04B03Woff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegularWoff2}) format('woff2'),
        url(${OpenSansRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'Open Sans';
      src: url(${OpenSansMediumWoff2}) format('woff2'),
          url(${OpenSansMediumWoff}) format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldRegularWoff2}) format('woff2'),
        url(${OswaldRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'Oswald';
      src: url(${OswaldSemiBoldWoff2}) format('woff2'),
          url(${OswaldSemiBoldWoff}) format('woff');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Oswald';
      src: url(${OswaldMediumWoff2}) format('woff2'),
          url(${OswaldMediumWoff}) format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
`
