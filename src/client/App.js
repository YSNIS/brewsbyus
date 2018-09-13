import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ReactImage from './react.png';

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
      <AppBar>
        <div className="xs-12">
          <h1>Brewsbyus</h1>
        </div>
      </AppBar>
      // <div>  
      //   {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      //   <img src={ReactImage} alt="react" />
      // </div>
    );
  }
}
