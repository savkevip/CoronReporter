import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Registration from "./containers/Registration";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from "./styles";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById("root"));
serviceWorker.unregister();
