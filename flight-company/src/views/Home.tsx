import React, { Component } from 'react';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import { AuthenticatedType } from '../Dtos';

interface HomeProps {
    authenticated: AuthenticatedType
}

class Home extends Component<HomeProps>{

    render() {
        var links = [];

        if (this.props.authenticated === AuthenticatedType.Guest) {
            return <Welcome />;
        }
        if (this.props.authenticated === AuthenticatedType.User) {
            links.push(<Link key="find" className="row" to='/find'>Find a flight</Link>);
        }
        if (this.props.authenticated === AuthenticatedType.Admin) {
            links.push(<li><Link key="find" className="row" to='/find'>Find a flight</Link></li>);
            links.push(<li><Link key="create" className="row" to='/create'>Create a flight</Link></li>);
        }

        return (
            <div className="App-content">
                <ul>
                    {links}
                </ul>
            </div>
        );
    }
}

export default Home