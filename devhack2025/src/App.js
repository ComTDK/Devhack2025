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
        {/* The navbar is always visible on every page */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/input">
            <InputPage />
          </Route>
          <Route path="/profile">
            <div style={{ width: "100%" }}>
              <View /> {/* The View component for profile page */}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
