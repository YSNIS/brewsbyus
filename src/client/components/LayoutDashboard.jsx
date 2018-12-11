import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import DashboardSidenav from './DashboardSidenav'

const LayoutDashboardStyled = styled.div`
  aside {
    position: fixed;
    left: 0;
    top: 80px;
    background: black;
    color: white;
    padding: 0;
    height: 100%;

    @media (min-width: ${({theme}) => theme.bp.xs}) {
      width: 200px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      border-bottom: 1px solid grey;
    }

    a {
      color: white;
      text-decoration: none;
      width: 100%;
      display: block;
      padding: 0.5rem;

      @media (min-width: ${({theme}) => theme.bp.xs}) {
        padding: 1rem;
      }

      &:hover,
      &:active {
        background: ${({theme}) => theme.colors.orange}
      }

      span {
        display: none;

        @media (min-width: ${({theme}) => theme.bp.xs}) {
          display: inline;
        }
      }
    }
  }

  main {
    position: fixed;
    left: 36px;
    top: 80px;
    width: calc(100% - 36px);
    height: 100%;
    padding: 0 1rem;
    background: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.light};

    @media (min-width: ${({theme}) => theme.bp.xs}) {
      left: 200px;
      width: calc(100% - 200px);
      padding: 0 2rem;
    }
  }
`

const LayoutDefault = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={() => (
      <LayoutDashboardStyled>
        <Header />
        <DashboardSidenav />
        <main>
          <Component {...rest} />
        </main>
      </LayoutDashboardStyled>
    )} />
  )
}

export default LayoutDefault
