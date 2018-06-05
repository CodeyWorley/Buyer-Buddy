import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateAccountInfo } from '../../actions/index';

class AccountForm extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => this.props.updateAccountInfo(values, this.props.history))}>
          <label>Store Name</label>
          <Field style={{height: '2rem'}} type="text" name="storeName" component="input" />
          <label>Seller ID</label>
          <Field style={{height: '2rem'}} type="text" name="sellerId" component="input" />
          <label>MWS Auth Token</label>
          <Field style={{height: '2rem'}} type="text" name="authToken" component="input" />
          <Link to="/dashboard">Cancel</Link>
          <button class="waves-effect waves-light btn-small blue darken-1" style={{marginLeft: '1vw'}} type="submit">Save</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ account }) {
  return {
    account,
    initialValues: {
      storeName: account.storeName,
      sellerId: account.sellerId,
      authToken: account.authToken
    }
  }
}

export default connect(mapStateToProps, { updateAccountInfo })
    (reduxForm({
      form: 'AccountForm',
      enableReinitialize: true
    })(AccountForm));
