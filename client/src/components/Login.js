import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./forms/Store";
import LoginForm from "./forms/LoginForm";
import showResults from "./forms/ShowResults";


class Login extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: 15 }}>
          <h2>Login Form</h2>
          <LoginForm onSubmit={showResults} />
        </div>
      </Provider>
    );
  }
}

export default Login;
