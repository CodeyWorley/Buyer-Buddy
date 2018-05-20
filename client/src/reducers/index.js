import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import listingsReducer from './listingsReducer';

export default combineReducers({
  listings: listingsReducer
});
