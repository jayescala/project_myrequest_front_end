import React from "react";
import "./App.css";
import HomeContainer from "./HomeContainer/HomeContainer.js";
import Register from "./Register/Register.js";
import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route exact path="/" component= { Register }/>
          <Route exact path="/home" component={ HomeContainer }/>
          <Route component= { My404 }/>
        </Switch>
      </div>
    </main>
  );
}

export default App;
