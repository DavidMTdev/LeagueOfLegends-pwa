import React from 'react'
import { ThemeProvider } from 'styled-components'

import Router from './router'
import GlobalStyle from './styles/GlobalStyle'
import { LightTheme } from './themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
