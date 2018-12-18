import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from 'react-icons-kit';
import { beer } from 'react-icons-kit/ionicons/beer'
import { home } from 'react-icons-kit/ionicons/home'
import { person } from 'react-icons-kit/ionicons/person'

const links = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: home
  },
  {
    label: 'User Profile',
    to: '/dashboard/user',
    icon: person
  },
  {
    label: 'Your Brews',
    to: '/dashboard/brews',
    icon: beer
  }
]

const IconStyled = styled(Icon)`
  @media (min-width: ${props => props.theme.bp.xs}) {
    margin-right: 0.5rem;
  }
`

const NavLinkStyled = styled(NavLink)`
  &.active {
    background: ${({theme}) => theme.colors.orange}
  }
`

const DashboardSidenav = () => (
  <aside>
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLinkStyled to={link.to} exact>
              <IconStyled size={'20'} icon={link.icon}/>
              <span>{link.label}</span>
            </NavLinkStyled></li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default DashboardSidenav
