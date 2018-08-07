import React, { Component } from "react";

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
    console.log(this.state);
    const registerResponse = await fetch("http://localhost:9000/user/register", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers:{
        "Content-Type": "application/json"
        }
    });
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse.data);
    if(parsedResponse.data.loggedIn === true){
      this.props.history.push("/home");
    }

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    return (
      <div>
        <h1>REGISTER</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange}/>
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange}/>
          </label><br/>
          <input type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}

export default Register;
