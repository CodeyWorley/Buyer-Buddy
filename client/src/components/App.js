import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


// CSS imports
import "../css/react-table.css";

// Component Imports
import Listings from './Listings';
import Nav from './Nav';
import Footer from './Footer';
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

// App paths
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Listings} />
            <Footer />
          </div>
        </BrowserRouter>
       </div>
    );
  }
}

export default connect(null, actions)(App);
