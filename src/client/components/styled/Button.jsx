import styled from 'styled-components'
import { lighten } from 'polished'

const ButtonStyled = styled.button`
  cursor: pointer;
  appearance: none;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  background: ${({theme}) => theme.colors.orange};
  color: ${({theme}) => theme.colors.light};
  border-radius: 5px;
  border-bottom: 0;
  border: 0;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${({theme}) => lighten(0.05, theme.colors.orange)};
    border-bottom: 0;
  }
`

export default ButtonStyled
