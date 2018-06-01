import axios from 'axios';
import { FETCH_LISTINGS } from './types';
import { FETCH_USER } from './types';
import { FETCH_ACCOUNT_INFO } from './types';

export const fetchListings = () => async dispatch => {
  const res = await axios.get('/api/listings');

  dispatch({type: FETCH_LISTINGS, payload: res.data});
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({type: FETCH_USER, payload: res.data})
}

export const fetchAccountInfo = () => async dispatch => {
  const res = await axios.get('/api/account_info');

  dispatch({type: FETCH_ACCOUNT_INFO, payload: res.data})
}
