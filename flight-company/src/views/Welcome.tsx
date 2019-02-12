import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div className="App-content Center-text">
                <h2>Welcome. Try <Link to="/login">logging in </Link>first. </h2>
            </div>
        );
    }
}