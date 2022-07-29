import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
