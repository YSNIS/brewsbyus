import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Marketplace from '../marketplace';
import MyBrewery from '../my-brewery';

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/marketplace' component={Marketplace}/>
        <Route exact path='/mybrewery' component={MyBrewery}/>
      </Switch>
    </main>
  );
}

export default Main;