import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import listingsReducer from './listingsReducer';

export default combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  form: reduxForm
});
