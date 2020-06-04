import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import MainPage from "./App";
import FZF from "./pages/404";
import Term from "./components/Term";

ReactDOM.render(
  <Router>
    <MainPage>
    <Switch>
      <Route path="/" component={Home} exact /> 
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/tools" component={Tools} />
      <Route path="/contact" component={Contact} />
      <Route path='/*' component={FZF} />
    </Switch>
    </MainPage>
  </Router>
  
  ,document.getElementById("root")
);

serviceWorker.unregister();
