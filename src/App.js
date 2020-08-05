import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import CurStock from "./components/temp/curStock";
import Login from "./components/login/login";
import Layout from "./components/layout/layout";
import Main from "./components/main/main";
import Detail from "./components/detail/detail";
import Classes from "./components/classes/classes";
import Valuation from "./components/valuation/valuation";

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
            <Detail />
          </Route>
          <Route path="/class">
            <Classes />
          </Route>
          <Route path="/valuation">
            <Valuation />
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
