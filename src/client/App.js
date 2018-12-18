import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutDefault from './components/LayoutDefault';
import LayoutDashboard from './components/LayoutDashboard';
import Home from './components/Home';
import DashboardUser from './components/DashboardUser';
import DashboardHome from './components/DashboardHome';
import DashboardBrews from './components/DashboardBrews';
import BrewsCreate from './components/BrewsCreate';

const theme = {
  colors: {
    teal: '#02796F',
    orange: '#E7990D',
    light: '#FFFFFF'
  },
  bp: {
    xxs: "480px",
    xs: "769px",
    sm: "992px",
    md: "1200px",
    lg: "1441px"
  }
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }
`;

export default class App extends React.Component {
  state = {
    user: {
      firstName: 'Philip',
      lastName: 'Caleja',
      email: 'pcaleja@gmail.com',
      zipcode: '00000',
      phone: '0000000000',
      role: 'consumer'
    }
  }

  componentDidMount() {
    const url = process.env.API_URL;

    fetch(`${url}/user/getCurrent`, {
      credentials: "include"
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.id) {
          this.setState({
            user: responseJson
          });
        }
      })
      .catch(error => {
        // console.error(error);
      });
  }

  updateUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Normalize />
        <ThemeProvider theme={theme}>
          <Router>
            <React.Fragment>
              <LayoutDefault
                path="/"
                exact
                component={Home}
              />
              <LayoutDashboard
                path="/dashboard"
                exact
                component={DashboardHome}
                user={user}
              />
              <LayoutDashboard
                path="/dashboard/user"
                component={DashboardUser}
                user={user}
                updateUser={this.updateUser}
              />
              <LayoutDashboard
                path="/dashboard/brews"
                component={DashboardBrews}
                user={user}
              />
              <LayoutDefault
                path="/brews/create"
                exact
                component={BrewsCreate}
              />
            </React.Fragment>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
