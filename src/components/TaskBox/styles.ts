import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1rem;
`
export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.whiteText};
`
export const CheckUncheckImg = styled.img`
  cursor: pointer;
`
