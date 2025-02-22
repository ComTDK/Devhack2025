import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import HomePage from "./HomePage"; // Home Page Component
import View from "./ViewProfile/View"; // View Profile Component
import InputPage from "./Input/page"; // Input Page Component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* The navbar is always visible on every page */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/input">
            <InputPage />
          </Route>
          <Route path="/profile">
            <View /> {/* The View component for profile page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
