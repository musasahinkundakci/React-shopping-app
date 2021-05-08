import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Added to DB!", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            {" "}
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            {" "}
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            {" "}
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Who are you..."
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            {" "}
            <Label for="city">City</Label>
            <Input
              type="select"
              name="City"
              id="City"
              onChange={this.onChangeHandler}
            >
              <option value="">Ankara</option>
              <option value="">İzmir</option>
              <option value="">Denizli</option>
              <option value="">Adana</option>
              <option value="">Giresun</option>
              <option value="">Van</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="danger">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
