import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HeaderLinks from './HeaderLinks'
import HeaderLogout from './HeaderLogout'
import HeaderToggle from './HeaderToggle'
import HeaderModal from './HeaderModal'
import Logo from './Logo'

const links = [
  {
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Marketplace',
    to: '/marketplace'
  },
  {
    label: 'My Brewery',
    to: '/my-brewery'
  },
  {
    label: 'Login',
    to: '/login',
    buttonColor: 'teal'
  },
  {
    label: 'Signup',
    to: '/signup',
    buttonColor: 'orange'
  }
]

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const HeaderWrapper = styled.div`
  display: ${props => props.isModal ? 'flex' : 'none'};
  flex-direction: column;

  @media (min-width: ${props => props.theme.bp.xs}) {
    display: flex;
    flex-direction: row;
  }
`

class Header extends React.Component {

  state = {
    isModalToggled: false
  }

  openModal = () => {
    this.setState({
      isModalToggled: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalToggled: false
    })
  }

  render() {
    const { user } = this.props
    return (
      <HeaderStyled>
        <Link to='/'>
          <Logo />
        </Link>
        <HeaderWrapper>
          <HeaderLinks user={user} links={links}/>
          <HeaderLogout user={user} />
        </HeaderWrapper>
        <HeaderToggle openModal={this.openModal} />
        {this.state.isModalToggled && (
          <HeaderModal closeModal={this.closeModal}>
            <HeaderWrapper isModal>
              <HeaderLinks user={user} links={links}/>
              <HeaderLogout user={user} />
            </HeaderWrapper>
          </HeaderModal>
        )}
      </HeaderStyled>
    )
  }
}

export default Header
