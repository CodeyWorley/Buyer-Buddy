import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from '../actions/index';
import  AccountForm  from './forms/AccountForm';


class Account extends Component {

  componentDidMount() {
    this.props.fetchAccountInfo();
  }

  render(props) {
    return (
      <div style={{margin: '30px', width: '30%'}}>
        <AccountForm
          storeName={this.props.account.storeName}
          sellerId={this.props.account.sellerId}
          authToken={this.props.account.authToken}
        />
      </div>
    );
  }
}

function mapStateToProps({ account }) {
  return { account };
}

export default connect(mapStateToProps, { fetchAccountInfo })(Account);
