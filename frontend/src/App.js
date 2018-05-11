import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import {StripeProvider} from 'react-stripe-elements';

import './App.css';
import './components/css/standardComponent.css';
import './components/css/form.css';
import './components/css/customerStats.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Invitations from './components/Invitations';
import Stats from './components/Stats';
import Settings from './components/Settings';
import Team from './components/Team';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import SignOut from './components/Signout';

import logo from './images/HIGTextLogoQMTransparent.png';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: localStorage.token,
    };
  }

  onSignInChange = () => {
    this.setState({
      authenticated: true,
    });
  }

  onSignOutChange = () => {
    this.setState({
      authenticated: false,
    });
  }

  render() {
    return (
      <div>
        <img src={logo} className='logo' />
        <Navigation authenticated={this.state.authenticated} />
        <Route path='/' exact     component={Home}  />
        <Route path='/signup'     component={SignUp} />
        <Route path='/signin'     render={() => <SignIn onChange={this.onSignInChange} />} />
        <Route path='/signout'    render={() => <SignOut onChange={this.onSignOutChange} />} />
        <Route path='/invitations'component={Invitations} />
        <Route path='/stats'      component={Stats} />
      <StripeProvider apiKey="pk_test_lYWOs3y88CPr5JkrwkMt7Cvr">
        <Route path='/settings'   component={Settings} />
      </StripeProvider>
        <Route path='/team'       component={Team} />
      </div>
    );
  }
   
}

export default App;
