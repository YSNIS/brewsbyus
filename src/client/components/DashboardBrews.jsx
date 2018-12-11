import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStyled from './styled/Button'

const DashboardBrews = props => (
  <React.Fragment>
    <h1>Your Brews</h1>
    <ButtonStyled as={Link} to='/brews/create'>Create A New Brew</ButtonStyled>
  </React.Fragment>
)

export default DashboardBrews
