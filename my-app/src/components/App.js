import React, { Component } from "react";
import "../styles/App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.js";
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import Users from "./Users.js";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/users" component={Users} />
                </div>
            </Router>
        );
    }
}

export default App;
