import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

// This reducer is responsible for the posts state
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      if (action.payload) {
        const { data } = action.payload;
        const newState = _.mapKeys(data, 'id');
        console.log('newState', newState);
        return newState;
      }
      return state;
    default:
      return state;
  }
}
