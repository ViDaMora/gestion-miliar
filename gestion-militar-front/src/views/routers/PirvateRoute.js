import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => authenticated === true
                ? (<Component {...props} />)
                : (<Redirect to={{ parthname: "/login", state: { from: props.location } }} />)}
        />
    );
}