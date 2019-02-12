import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './views/Home';
import Login, { LoginState } from './views/Login'
import CreateFlight from './views/CreateFlight'
import FindFlight from './views/FindFlight'
import { User, AuthenticatedType } from './Dtos'
import { PrivateRoute, AdminRoute } from './components/RouteExtensions';

interface AppProps { }
interface AppState {
  authenticated: AuthenticatedType,
  loggedInUser: string,
  users: User[]
}


class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      authenticated: AuthenticatedType.Guest,
      loggedInUser: "",
      users: [
        {
          email: "adrian.cigher@wirtek.com", password: "1234", isAdmin: true
        },
        {
          email: "test@wirtek.com", password: "1234", isAdmin: false
        }
      ]
    }

    this.performAuth = this.performAuth.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header userName={this.state.loggedInUser} />
          <Switch>
            <Route path="/login" render={(props) => <Login {...props} authCallback={this.performAuth} />} />
            <PrivateRoute path="/find" component={FindFlight} authenticated={this.state.authenticated} />
            <AdminRoute path="/create" component={CreateFlight} authenticated={this.state.authenticated} />
            <Route path="/" render={(props) => <Home authenticated={this.state.authenticated} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  performAuth(credentials: LoginState) {
    let user = this.state.users.find(u => u.email == credentials.email && u.password == credentials.password);
    if (user) {
      this.setState({ loggedInUser: user.email, authenticated: user.isAdmin ? AuthenticatedType.Admin : AuthenticatedType.User });
    }
  }
}

export default App;
