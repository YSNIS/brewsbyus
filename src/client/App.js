import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import Header from "./components/Header";
import Main from "./components/main";

const theme = {
  colors: {
    teal: "#02796F",
    orange: "#E7990D",
    white: "#FFFFFF"
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
    user: null
  };

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

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Normalize />
        <ThemeProvider theme={theme}>
          <div>
            <Header user={user} />
            <Main />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
