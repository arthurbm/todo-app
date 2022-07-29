import 'styled-components'
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

type Theme = typeof dark & typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
