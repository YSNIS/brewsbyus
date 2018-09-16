import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Marketplace from '../marketplace';
import MyBrewery from '../my-brewery';
import SignUp from '../sign-up';
import Login from '../login';

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/marketplace' component={Marketplace}/>
        <Route exact path='/mybrewery' component={MyBrewery}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
    </main>
  );
}

export default Main;