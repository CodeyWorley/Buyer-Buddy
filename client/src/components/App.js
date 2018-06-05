import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Component Imports
import Nav from './Nav';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Account from './Account';

// App paths
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/account" component={Account} />

            <Footer />
          </div>
        </BrowserRouter>
       </div>
    );
  }
}

export default connect(null, actions)(App);
