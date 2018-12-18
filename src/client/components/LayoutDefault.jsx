import React from 'react'
import { Route } from 'react-router-dom';
import Header from './Header'

const LayoutDefault = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={() => (
      <React.Fragment>
        <Header />
        <main>
          <Component {...rest} />
        </main>
      </React.Fragment>
    )} />
  )
};

export default LayoutDefault
