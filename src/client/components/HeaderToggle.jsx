import React from 'react'
import styled from 'styled-components'

const HeaderToggleStyled = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  padding: 0;

  div {
    width: 25px;
    height: 3px;
    background-color: ${({theme}) => theme.colors.teal};
    margin: 4px 0;
  }

  @media (min-width: ${({theme}) => theme.bp.xs}) {
    display: none;
  }
`

const HeaderToggle = (props) => {
  const { onClick } = props
  return (
    <HeaderToggleStyled onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </HeaderToggleStyled>
  )
}

export default HeaderToggle
