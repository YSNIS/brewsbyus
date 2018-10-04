import React, { Component } from 'react';
import './app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import Main from './components/main';


export default class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    const url = process.env.API_URL;

    fetch(`${url}/user/getCurrent`, {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          this.setState({
            user: responseJson
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <React.Fragment>
        <CssBaseline />
        <Header user={user} />
        <Main />
      </React.Fragment>
    );
  }
}