import React, { Component } from "react";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = heroku;

class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const registerResponse = await fetch(activehost + "/user/register", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers:{
        "Content-Type": "application/json"
        }
    });
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse);
    console.log(parsedResponse.data.loggedIn);
    if(parsedResponse.data.loggedIn === true){
      this.props.history.push("/home", {
        username: this.state.username
      });
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    return (
      <div id="register-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}

export default Register;
