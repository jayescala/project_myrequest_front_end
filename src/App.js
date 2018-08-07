import React from "react";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer.js";
import HomeContainer from "./HomeContainer/HomeContainer.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Room from "./RoomContainer/Room.js";
import { Route, Switch, Link } from "react-router-dom";

const My404 = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Sorry, the page cannot be found.</h3>
    </div>
  );
}

const App = () => {
  return (
    <main>
      <div>
        <Link to="/user/register">Register</Link>
        <Link to="/user/login">Login</Link>
        <Switch>
          <Route exact path="/" component= { MainContainer }/>
          <Route exact path="/user/register" component= { Register }/>
          <Route exact path="/user/login" component= { Login }/>
          <Route exact path="/home" component={ HomeContainer }/>
          <Route path="/room/:code" component={ Room }/>
          <Route component= { My404 }/>
        </Switch>
      </div>
    </main>
  );
}

export default App;
