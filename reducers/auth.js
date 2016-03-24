import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
});

export default createReducer(initialState, {
  [ActionTypes.SIGNIN_REQUEST]: (state, payload) => {
    return state.withMutations(map => {
      map.set('isAuthenticating', true)
    })
  },
  [ActionTypes.SIGNIN_SUCCESS]: (state, payload) => {
    return state.withMutations(map => {
      map
        .set('isAuthenticating', false)
        .set('isAuthenticated', true)
        .set('token', payload.payload.token)
        .set('statusText', 'You have been successfully logged in.')
    })
  },
  [ActionTypes.SIGNIN_FAILURE]: (state, payload) => {
    return state.withMutations(map => {
      map
        .set('isAuthenticating', false)
        .set('isAuthenticated', false)
        .set('token', null)
        .set('statusText', `Authentication Error: ${payload.status} ${payload.statusText}`)
    })
  },
  [ActionTypes.SIGNOUT]: (state, payload) => {
    return state.withMutations(map => {
      map
        .set('isAuthenticated', false)
        .set('token', null)
        .set('statusText', 'You have been successfully logged out.')
    })
  }
})
