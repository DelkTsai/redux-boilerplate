import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import { createReducer } from '../utils';

const initialState = Immutable.fromJS({
  entities: null,
  fetch: {
    isRequesting: false,
    isSuccessed: false,
    isFailure: false,
    error: null
  }
})

export default createReducer(initialState, {

  [ActionTypes.FETCH_SESSION_REQUEST](state, action) {
    return state.withMutations(map => {
      map.setIn(['fetch', 'isRequesting'], true)
    })
  },

  [ActionTypes.FETCH_SESSION_SUCCESS](state, action) {
    return state.withMutations(map => {
      map.setIn(['fetch', 'isRequesting'], false)
        .setIn(['fetch', 'isSuccessed'], true)
        .set('entities', action.payload.session)
    })
  },

  [ActionTypes.FETCH_SESSION_FAILURE](state, action) {
    return state.withMutations(map => {
      map.setIn(['fetch', 'isRequesting'], false)
        .setIn(['fetch', 'isFailure'], true)
        .setIn(['fetch', 'error'], action.payload.error.statusText)
    })
  },
})
