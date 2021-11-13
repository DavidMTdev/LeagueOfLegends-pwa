import { createGlobalStyle } from 'styled-components'

import {
  FrizQuadrataRegular,
  FrizQuadrataItalic,
  FrizQuadrataBold
} from '../assets/fonts/FrizQuadrata'

const GlobalStyle = createGlobalStyle`
 @font-face {
     font-family: 'FrizQuadrata';
     src: url(${FrizQuadrataRegular}) format("truetype");
     font-weight: normal;
     font-style: normal;
  }

  @font-face {
     font-family: 'FrizQuadrata';
     src: url(${FrizQuadrataItalic}) format("truetype");
     font-weight: normal;
     font-style: italic;
  }

 @font-face {
     font-family: 'FrizQuadrata';
     src: url(${FrizQuadrataBold}) format("OpenType");
     font-weight: bold;
     font-style: normal;
  }

  *{
    text-decoration: none;
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: '#FFFFFF';
  overscroll-behavior: none;
  }
`

export default GlobalStyle
