import axios from 'axios';
import { FETCH_LISTINGS } from './types';

export const fetchListings = () => async dispatch => {
  const res = await axios.get('/api/listings');

  dispatch({type: FETCH_LISTINGS, payload: res.data});
}
