import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Registration from "./containers/Registration";
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, Switch } from 'react-router-dom';
import history from "./history";
import { GlobalStyle } from "./styles";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));
serviceWorker.unregister();
