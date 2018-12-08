import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  border: 0;
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem 0.5rem;
  color: ${({theme}) => theme.colors.teal};
  border-bottom: 2px solid transparent;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus {
    border-bottom: 2px solid ${({theme}) => theme.colors.orange}
  }

  @media (min-width: ${({theme}) => theme.bp.xs}) {
    font-size: 1rem;
    padding: 0.25rem 1rem;
    margin-left: 1rem;
    background: ${({theme, background}) => theme.colors[background]};
    color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    border: 0;
    text-align: center;

    &:hover,
    &:focus {
      opacity: 0.8;
      border: 0;
    }
  }
`

class HeaderLogout extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  logout = () => {
    console.log('logout')
  }

  render() {
    const { user } = this.props
    if (!user) return null
    return <Button onClick={this.logout} background='orange'>Logout</Button>
  }
}

export default HeaderLogout
