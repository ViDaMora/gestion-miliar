import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login/Login';

const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </Router>
    )
}

export default Routers;