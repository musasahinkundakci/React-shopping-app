import React, { Component } from "react";
import { Button } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { username: "", city: "" };
  onChangeHandler = (event) => {
    //this.setState({ username: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    alert(this.state.username);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input name="username" onChange={this.onChangeHandler} type="text" />
          <h4>Username is {this.state.username}</h4>

          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler} type="text" />
          <h4>City is {this.state.city}</h4>
          <Button type="submit" value="save">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
