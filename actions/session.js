import * as ActionTypes from '../ActionTypes';
import { checkHttpStatus, parseJSON, getLocalToken } from '../utils';

export function sessionRequest() {
  return {
    type: ActionTypes.FETCH_SESSION_REQUEST
  }
}

export function sessionSuccess(session) {
  return {
    type: ActionTypes.FETCH_SESSION_SUCCESS,
    payload: {
      session: session
    }
  }
}

export function sessionFailure(error) {
  return {
    type: ActionTypes.FETCH_SESSION_FAILURE,
    payload: {
      error: error.response
    }
  }
}

export function fetchSession() {
  return (dispatch, state) => {
    dispatch(sessionRequest())
    return fetch('http://localhost:5000/api_v1/session', {
      headers: {
        'x-auth-token': getLocalToken(),
        'content-type': 'application/json',
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(sessionSuccess(response))
    })
    .catch(error => {
      debugger
      dispatch(sessionFailure(error))
    })
  }
}
