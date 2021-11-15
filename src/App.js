import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import Router from './router'
import GlobalStyle from './styles/GlobalStyle'
// import { DarkTheme } from './themes'

function App() {
  const theme = useSelector(state => state.theme.value)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
