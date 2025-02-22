import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Test from "./Test";
import InputPage from "./Input/page";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomePage />
          </Route>
          <Route path="/input">
            <InputPage />
          </Route>
          <Route path="/marco">
            <InputPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
