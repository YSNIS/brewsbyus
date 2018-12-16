import React from 'react'
import PropTypes from 'prop-types'
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
  const { openModal } = props
  return (
    <HeaderToggleStyled onClick={openModal}>
      <div></div>
      <div></div>
      <div></div>
    </HeaderToggleStyled>
  )
}

HeaderToggle.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default HeaderToggle
