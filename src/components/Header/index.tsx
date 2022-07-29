import React from 'react'
import { Container, Image } from './styles'
import { Moon, Sun, Todo } from '../../assets'

// import { Container } from './styles';

interface HeaderProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>
  theme: string
}

export function Header({ setTheme, theme }: HeaderProps) {
  function handleThemeChange() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <img src={Todo} alt="todo" />
      {/* <ReactSwitch
        onChange={handleThemeChange}
        checked={checked}
        // uncheckedIcon={Sun}
        // checkedIcon={Moon}
      /> */}
      {theme === 'dark' ? (
        <Image onClick={handleThemeChange} src={Sun} alt="sun" />
      ) : (
        <Image onClick={handleThemeChange} src={Moon} alt="moon" />
      )}
    </Container>
  )
}
