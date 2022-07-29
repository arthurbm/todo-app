import styled from 'styled-components'

export const FormsContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
`
export const Input = styled.input`
  width: 40rem;
  height: 3.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.quaternary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  outline: none;
`
export const Button = styled.button`
  width: 5.625rem;
  height: 3.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.button};
  border: 0;
`
