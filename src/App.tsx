import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components'
import { GlobalStyle } from './styles/global'
import { dark } from './styles/themes/dark'
import { light } from './styles/themes/light'

function App() {
  const [selectedTheme, setSelectedTheme] = useState('dark')

  return (
    <ThemeProvider theme={selectedTheme === 'dark' ? dark : light}>
      <Header setTheme={setSelectedTheme} theme={selectedTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
