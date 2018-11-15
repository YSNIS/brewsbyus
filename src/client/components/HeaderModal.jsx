import React from 'react'
import styled from 'styled-components'

const HeaderModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.colors.white};
  padding: 1rem;
  padding-top: 2rem;
  z-index: 4;

  @media (min-width: ${({theme}) => theme.bp.xs}) {
    display: none;
  }
`

const HeaderModalCloseStyled = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
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

    &:first-of-type {
      transform: rotate(45deg) translate(2px, 2px);
    }

    &:last-of-type {
      transform: rotate(-45deg);
    }
  }
`

const HeaderModalClose = props => (
  <HeaderModalCloseStyled>
    <div></div>
    <div></div>
  </HeaderModalCloseStyled>
)

const HeaderModal = props => {
  const { onClick } = props
  return (
    <HeaderModalStyled onClick={onClick}>
      <HeaderModalClose/>
      {props.children}
    </HeaderModalStyled>
  )
}

export default HeaderModal
