import React, { Component } from "react";

export class Input1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }
  handleUserName = (event) => {
    this.setState({ userName: event.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName}`);
    alert(`${this.state.password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>userName:</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserName}
          />
          <input type="submit" />
          <br />
          <label>Password:</label>

          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default Input1;
