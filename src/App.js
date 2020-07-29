import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import CurStock from "./components/temp/curStock";
import Login from "./components/login/login";
import Layout from "./components/layout/layout";
import Main from "./components/main/main";

const GlobalStyle = createGlobalStyle({
  body: {
    backgroundColor: "#f3f4f7",
    padding: 0,
    margin: 0,
  },
});

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Layout>
            <Main />
          </Layout>
        </Route>
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
