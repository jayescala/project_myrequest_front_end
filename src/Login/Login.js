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
    const loginResponse = await fetch("http://localhost:9000/user/login", {
      method: "post",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers:{
        "Content-Type": "application/json"
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse);
    if(parsedResponse.data === "login successful"){
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

// User Login //
router.post("/login", async (req, res) => {
  Users.findOne({username: req.body.username}, (err, loginUsername) => {
    if(loginUsername){
      if(bcrypt.compareSync(req.body.password, loginUsername.password)){
        req.session.username = req.body.username;
        req.session.loggedIn = true;
        req.session.message = "You are already logged in.";
        res.redirect("/");
      } else {
        req.session.message = "The password you have entered is incorrect.";
        res.redirect("/user/create");
      }
    } else {
      req.session.message = "The username you had entered does not match any existing accounts.";
      res.redirect("/user/create");
    }
  });
});
