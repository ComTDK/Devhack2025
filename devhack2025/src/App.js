import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import InputPage from "./Input/page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/input">
          <InputPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
