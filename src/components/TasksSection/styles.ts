import styled from 'styled-components'

interface CustomTextProps {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    width: 46rem;
  }
`

export const CustomText = styled.p<CustomTextProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color, theme }) =>
    color === 'blue' ? theme.colors.blue2 : theme.colors.quaternary};
`
