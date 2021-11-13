import React from 'react'
import { ThemeProvider } from 'styled-components'

import Router from './router'
import GlobalStyle from './styles/GlobalStyle'
import { DarkTheme } from './themes'

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
