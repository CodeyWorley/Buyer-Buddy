import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h1>
          Dashboard
        </h1>
        <li> Status: Active </li>
        <li> Store: FLH </li>
        <li> Last Update : date </li>
      </div>
    );
  }
}

export default Dashboard;
