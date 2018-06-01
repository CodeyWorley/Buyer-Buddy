import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import listingsReducer from './listingsReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  account: accountReducer,
  form: reduxForm
});
