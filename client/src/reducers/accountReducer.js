import { FETCH_ACCOUNT_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ACCOUNT_INFO:
      return action.payload;
    default:
      return state;
  }
}
