import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    userName: string
}

class Header extends Component<any, any>{
    render() {
        if (this.props.userName) {
            return (
                <header className="App-header">
                    <h1><Link to="/">Flights</Link></h1>
                    <div className="col-md-2 offset-10">
                        {this.props.userName}
                    </div>
                </header>
            );
        }
        else {
            return (
                <header className="App-header">
                    <h1><Link to="/">Flights</Link></h1>
                </header>
            );
        }

    }
}

export default Header