import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.teal};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 1rem 0.5rem;

  &:hover,
  &:focus {
    border-bottom: 2px solid ${({theme}) => theme.colors.orange}
  }

  @media (min-width: ${({theme}) => theme.bp.xs}) {
    font-size: 1rem;
    padding: 0.25rem 0;
    margin-left: 1rem;
  }
`

const LinkButton = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem 0.5rem;
  color: ${({theme}) => theme.colors.teal};
  border-bottom: 2px solid transparent;

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
    border-bottom: 0;

    &:hover,
    &:focus {
      opacity: 0.8;
      border-bottom: 0;
    }
  }
`

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user, links } = this.props
    return (
      links.map((link, index) =>
        link.buttonColor ? (
          ( !user &&
            <LinkButton to={link.to} background={link.buttonColor} key={index}>
              {link.label}
            </LinkButton>
          )
        ) : (
          <LinkStyled to={link.to} key={index}>
            {link.label}
          </LinkStyled>
        )
      )
    )
  }
}

export default HeaderLinks
