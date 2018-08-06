import React from "react";
import "./App.css";
// import MovieContainer from "./MovieContainer/MovieContainer.js";
import Login from "./Login/Login.js";
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
          <Route exact path="/" component= { Login }/>
          {/* <Route exact path="/movies" component={ MovieContainer }/> */}
          <Route component= { My404 }/>
        </Switch>
      </div>
    </main>
  );
}

export default App;
