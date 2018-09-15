import React, { Component } from 'react';
import './app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import Main from './components/main';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Main /> 
      </React.Fragment>
    );
  }
}