import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo-brewsbyus.svg'

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Brews By Us'
})`
  height: 25px;

  @media (min-width: ${({theme}) => theme.bp.xs}) {
    height: 40px;
  }
`

export default Logo
