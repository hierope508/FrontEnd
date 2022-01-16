import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

import "./../css/Login.css";
import configData from "../config.json";

class Login extends Component {
  state = { loginHash: "", logged: false };

  handleLoginClick = (e) => {
    e.preventDefault();
    const login = document.getElementById("loginInput").value;
    const pass = document.getElementById("passwordInput").value;

    if (login && pass) {
      const apiURL = `${configData.SERVER_URL}/Users/Authenticate/`;
      const requestURL = `${apiURL}?email=${login}&password=${pass}`;
      console.log(requestURL);
      const todos = axios.get(requestURL).then((response) => {
        console.log(response);
        if (response.status == "200") {
          this.setState({ logged: true });
        }
      });
    } else {
      console.log("Login or password invalid");
    }
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/calendar" />;
    }

    console.log(this.state.logged, this.state.logged);
    const img = require("./../resources/simbolo-medicina.jpg");

    return (
      <div>
        <form className="container LoginForm">
          <div className="container Logodiv">
            <img className="LogoImg" src={img.default}></img>
          </div>
          <div className="mb-3">
            <label for="loginInput" className="form-label">
              Email address
            </label>
            <input
              id="loginInput"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="passwordInput" className="form-label">
              Password
            </label>
            <input
              id="passwordInput"
              type="password"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            onClick={this.handleLoginClick}
            id="btnLogin"
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
