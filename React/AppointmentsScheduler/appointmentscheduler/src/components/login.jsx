import React, { Component } from "react";
import axios from "axios";

import "./../css/Login.css";

class Login extends Component {
  state = {};

  handleLoginClick = (e) => {
    e.preventDefault();
    const login = document.getElementById("loginInput");
    console.log("Login:", login.value);
    const todos = axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => console.log("Todos:", response.data));
    console.log(todos);
  };

  render() {
    const btnLogin = document.getElementById("btnLogin");
    const pass = document.getElementById("passwordInput");

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
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              id="passwordInput"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
