import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Collections from "Routes/Collections";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route
          path="https://callmedevmomo.github.io/net-flix/"
          exact
          component={Home}
        />
        <Route path="/tv" exact component={TV} />
        {/* <Route path="/tv/momo" render={() => <h1>MOMO</h1>} /> */}
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Route path="/collections/:id" component={Collections} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
