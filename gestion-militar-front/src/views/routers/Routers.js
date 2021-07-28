import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/login/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PirvateRoute';
import Home from '../pages/home/Home';
import Lider from '../pages/lider/Lider';
import Militar from '../pages/militar/Militar';
import Vehiculo from '../pages/vehiculo/Vehiculo';
import Operacion from '../pages/operacion/Operacion';
import Unidad from '../pages/unidad/Unidad';

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
        return (
            <Router>
                <Switch>
                    {this.state.authenticated ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={Login} />}
                    <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login} />
                    <PrivateRoute exact path="/" authenticated={this.state.authenticated} component={Home} />
                    <PrivateRoute exact path="/lider" authenticated={this.state.authenticated} component={Lider} />
                    <PrivateRoute exact path="/militar" authenticated={this.state.authenticated} component={Militar} />
                    <PrivateRoute exact path="/vehiculo" authenticated={this.state.authenticated} component={Vehiculo} />
                    <PrivateRoute exact path="/operacion" authenticated={this.state.authenticated} component={Operacion} />
                    <PrivateRoute exact path="/unidad" authenticated={this.state.authenticated} component={Unidad} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;