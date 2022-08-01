import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.quintenary};
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  justify-content: space-between;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const Text = styled.p`
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.whiteText};
`

export const CrossedText = styled.del`
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.quaternary};
`

export const Image = styled.img`
  cursor: pointer;
`
