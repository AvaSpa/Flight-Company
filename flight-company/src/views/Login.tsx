import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import BaseComponent from '../components/BaseComponent';

interface LoginProps extends RouteComponentProps<any> { authCallback: (credentials: LoginState) => void }

export interface LoginState {
    email: string,
    password: string
}

class Login extends BaseComponent<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.submit = this.submit.bind(this);
    }

    submit(e: React.FormEvent) {
        e.preventDefault();
        this.props.authCallback(this.state);
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="App-content offset-3">
                <form action="/" onSubmit={this.submit}>
                    <div className="form-group col-md-5 col-sm-10">
                        <label htmlFor="email">E-Mail</label>
                        <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-5 col-sm-10">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-2">
                        <input type="submit" name="login" value="Login" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login