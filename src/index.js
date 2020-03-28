import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Registration from "./containers/Registration";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { GlobalStyle } from "./styles";
import * as serviceWorker from "./serviceWorker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./containers/ForgotPassword"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ToastContainer />
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgot" component={ForgotPassword} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
