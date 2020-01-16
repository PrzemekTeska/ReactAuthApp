import React, { Component } from 'react';
import axios from 'axios';
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

handleLogoutClick() {
  axios.delete("http://localhost:3001/logout", { withCredentials: true}).then(response => {
      this.props.handleLogout();
  }).catch(error => {
    console.log("logout error", error);
  });
}

  render() {
    return (
      <div id = "mainWrapper">
      <button id = "logoutButton" onClick={() => this.handleLogoutClick()}>Logout</button>

        <div>
                <h1 id = "loginStatus">You are {this.props.loggedInStatus}</h1>
                <h1 id = "welcomeText">Welcome to my page!</h1>

                <div id = "registrationWrapper">
                <Registration handleSuccessfulAuth ={this.handleSuccessfulAuth}/>
                </div>
                <br/>
                <div id = "loginWrapper">
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </div>
        </div>

      </div>
    );
  }
}
