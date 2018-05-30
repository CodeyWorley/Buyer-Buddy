import axios from 'axios';
import { FETCH_LISTINGS } from './types';
import { FETCH_USER } from './types';

export const fetchListings = () => async dispatch => {
  const res = await axios.get('/api/listings');

  dispatch({type: FETCH_LISTINGS, payload: res.data});
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({type: FETCH_USER, payload: res.data})
}
