import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CurStock from "./components/temp/curStock";
import Login from "./components/login/login";

function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/search">Search</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/search">
          <CurStock />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
