import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAccountInfo } from '../actions/index';
import  AccountForm  from './forms/AccountForm';


class Account extends Component {

  componentDidMount() {
    this.props.fetchAccountInfo();
  }

  render(props) {
    return (
      <div style={{textAlign: 'center',marginTop: '5vh', marginBottom: '75vh', marginLeft: '28vw', marginRight: '28vw',}}>
        <AccountForm
          storeName={this.props.account.storeName}
          sellerId={this.props.account.sellerId}
          authToken={this.props.account.authToken}
          history={this.props.history}
        />
      </div>
    );
  }
}

function mapStateToProps({ account }) {
  return { account };
}

export default connect(mapStateToProps, { fetchAccountInfo })(Account);
