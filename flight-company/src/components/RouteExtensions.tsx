import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { AuthenticatedType } from '../Dtos';

interface PrivateRouteProps extends RouteProps { authenticated: AuthenticatedType }

export class PrivateRoute extends Component<PrivateRouteProps>{
    render() {
        if (this.props.authenticated === AuthenticatedType.User || this.props.authenticated === AuthenticatedType.Admin) {
            return <Route {...this.props} />
        }
        return <Redirect to='/' />
    }
}

export class AdminRoute extends Component<PrivateRouteProps>{
    render() {
        if (this.props.authenticated === AuthenticatedType.Admin) {
            return <Route {...this.props} />
        }
        return <Redirect to='/' />
    }
}
