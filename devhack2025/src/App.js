import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import View from "./ViewProfile/View"; // View Profile Component
import InputPage from "./Input/page"; // Input Page Component
import HomePage from "./HomePage/HomePage";
import Navbar from "./HomePage/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-layout">
          <div className="content-container">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/input">
                <InputPage />
              </Route>
              <Route path="/profile">
                <View />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
