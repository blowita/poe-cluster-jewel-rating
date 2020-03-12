import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import DarkModeContext from './DarkModeContext'

import Routes from './Routes'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: ['Verdana', 'Arial', 'Helvetica', 'sans-serif'],
    },
  })

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(mode => !mode),
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}
