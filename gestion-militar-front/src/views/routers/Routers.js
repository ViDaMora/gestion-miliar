import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PirvateRoute';
import Home from '../pages/home/Home';

import { auth } from '../../infrastructure/services/firebase/firebase-config'

class Routers extends Component {

    constructor() {
        super();
        this.state = {
            authenticated: false
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                });
            } else {
                this.setState({
                    authenticated: false,
                });
            }
        });
    }
    
    render() {
        console.log(this.state.authenticated);
        return (
            <Router>
                <Switch>
                    {this.state.authenticated ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={Login} />}
                    <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login} />
                    <PrivateRoute exact path="/" authenticated={this.state.authenticated} component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;