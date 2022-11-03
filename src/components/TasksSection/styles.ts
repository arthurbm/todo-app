import styled from 'styled-components'
import { checkColor } from '../../utils/checkColor'

interface CustomTextProps {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  @media (min-width: 768px) {
    width: 46rem;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const NumberText = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 50%;
  margin-left: 0.625rem;
  background-color: ${({ theme }) => theme.colors.quintenary};
  color: ${({ theme }) => theme.colors.whiteText};
`

export const NumberTextCompleted = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 0.625rem;
  background-color: ${({ theme }) => theme.colors.quintenary};
  color: ${({ theme }) => theme.colors.whiteText};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`

export const CustomText = styled.p<CustomTextProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color, theme }) => checkColor(color, theme)};
`
