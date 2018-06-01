import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from '../actions/index'
import Listings from './Listings';

class Vendor extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', padding: '30px'}}>
        <ul>
        <li>Listings to order when checked will go here *select table HOC*</li>
        <li><button>Send</button></li>
        </ul>
      </div>
    );
  }
}


export default Vendor;
