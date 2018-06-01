import React from 'react'
import {Field, reduxForm} from 'redux-form'

const AccountForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Store Name</label>
        <div>
          <Field
            name="storeName"
            component="input"
            type="text"
            placeholder={props.storeName}
          />
        </div>
        <label>Seller ID</label>
        <div>
          <Field
            name="sellerId"
            component="input"
            type="text"
            placeholder={props.sellerId}
          />
        </div>
        <label>MWS Auth Token</label>
        <div>
          <Field
            name="authToken"
            component="input"
            type="text"
            placeholder={props.authToken}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Save</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'simple',
  enableReinitialize: true
})(AccountForm)
