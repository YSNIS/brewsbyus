import React, { Component } from 'react';
import './app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import Main from './components/main';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Main /> 
      </React.Fragment>
    );
  }
}