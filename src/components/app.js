import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from "axios";

import Home from './Home';
import Dashboard from './Dashboard';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT LOGGED IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
    .get("https://rocky-ravine-70769.herokuapp.com/logged_in", { withCredentials: true })
    .then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === "NOT LOGGED IN") {
        this.setState({
          loggedInStatus: "LOGGED IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED IN") {
        this.setState({
          loggedInStatus: "NOT LOGGED IN",
          user: {}
      })
    }
  })
    .catch(error => {
      console.log("check login error", error);
    });
}
    componentDidMount() {
      this.checkLoginStatus();
    }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT LOGGED IN",
      user: {}
    })
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route
            exact
            path={"/"}
            render ={props => (
              <Home
              {... props}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus = {this.state.loggedInStatus} />
            )}
            />
            <Route
            exact
            path={"/dashboard"}
            render ={props => (
              <Dashboard
              {... props}
              loggedInStatus = {this.state.loggedInStatus}
              />
            )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
