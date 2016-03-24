import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import { createReducer } from '../utils';

const initialState = Immutable.fromJS({
  entities: null,
  read: {
    isRequesting: false,
    isSuccessed: false,
    isFailure: false,
    error: null
  }
})

export default createReducer(initialState, {

  [ActionTypes.FETCH_MESSAGE_REQUEST](state, action) {
    return state.withMutations(map => {
      map.setIn(['read', 'isRequesting'], true)
    })
  },

  [ActionTypes.FETCH_MESSAGE_SUCCESS](state, action) {
    return state.withMutations(map => {
      map.setIn(['read', 'isRequesting'], false)
        .setIn(['read', 'isSuccessed'], true)
        .set('entities', action.payload.session)
    })
  },

  [ActionTypes.FETCH_MESSAGE_FAILURE](state, action) {
    return state.withMutations(map => {
      map.setIn(['read', 'isRequesting'], false)
        .setIn(['read', 'isFailure'], true)
        .setIn(['read', 'error'], action.payload.error.statusText)
    })
  },
})

