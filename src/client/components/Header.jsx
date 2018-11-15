import React from 'react'
import styled from 'styled-components'
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

const HeaderStyled = styled.div`
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
  constructor(props) {
    super(props);
    this.state = {isModalToggled: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalToggled: true
    })
  }

  closeModal() {
    this.setState({
      isModalToggled: false
    })
  }

  render() {
    const { user } = this.props
    return (
      <HeaderStyled>
        <Logo />
        <HeaderWrapper>
          <HeaderLinks links={links}/>
          <HeaderLogout user={user} />
        </HeaderWrapper>
        <HeaderToggle onClick={this.openModal} />
        {this.state.isModalToggled && (
          <HeaderModal onClick={this.closeModal}>
            <HeaderWrapper isModal>
              <HeaderLinks links={links}/>
              <HeaderLogout user={user} />
            </HeaderWrapper>
          </HeaderModal>
        )}
      </HeaderStyled>
    )
  }
}

export default Header
