import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/summary">
            <Main />
          </Route>
          <Route path="/detail">
            <Main />
          </Route>
          <Route path="/class">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <CurStock />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
