import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`
export const Image = styled.img`
  cursor: pointer;
  /* color: ${({ theme }) => theme.colors.primary}; */
  position: absolute;
  top: 1rem;
  right: 2rem;
`
