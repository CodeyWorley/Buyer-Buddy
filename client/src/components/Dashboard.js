import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo, fetchListings } from '../actions/index'
import Listings from './Listings';
import Vendor from './Vendor';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchAccountInfo()
  }

  render(props) {
    return (
      <div>
        <Vendor />

        <div className="row" style={{marginBottom: '2px', marginLeft: '30px', marginRight: '30px'}}>
          <div style={{float: 'left', width: '20%'}}>{this.props.account.storeName}</div>
          <div style={{float: 'left', width: '25%'}}>Last Update: {this.props.account.updated}</div>
          <div style={{float: 'left', width: '10%'}}>Status: <span style={{color: 'green'}}>{this.props.account.status}</span></div>
          <div style={{float: 'right'}}><a href="/account">Edit Account</a></div>
          <div style={{float: 'right', marginRight:'30px'}}><a href="/account">Edit Payment</a></div>
        </div>

        <Listings />
      </div>
    );
  }
}

function mapStateToProps({ account, listings }) {
  return { account, listings };
}

export default connect(mapStateToProps, { fetchAccountInfo })(Dashboard);
