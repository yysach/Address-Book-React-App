import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthenticationService } from '../service/AuthenticationService';

export const PrivateRoute = ({ component:Component,content, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = AuthenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        // authorised so return component
        return <Component content={content}/>
    }} />
)