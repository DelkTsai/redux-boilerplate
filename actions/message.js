import * as ActionTypes from '../ActionTypes';
import { checkHttpStatus, parseJSON, getLocalToken } from '../utils';

export function messageRequest() {
  return {
    type: ActionTypes.FETCH_MESSAGE_REQUEST
  }
}

export function messageSuccess(session) {
  return {
    type: ActionTypes.FETCH_MESSAGE_SUCCESS,
    payload: {
      session: session
    }
  }
}

export function messageFailure(error) {
  return {
    type: ActionTypes.FETCH_MESSAGE_FAILURE,
    payload: {
      error: error.response
    }
  }
}

export function fetchMessage() {
  return (dispatch, state) => {
    dispatch(messageRequest())
    return fetch('http://localhost:5000/api_v1/accounts/4/contents', {
      headers: {
        'x-auth-token': getLocalToken(),
        'content-type': 'application/json',
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(messageSuccess(response))
    })
    .catch(error => {
      dispatch(messageFailure(error))
    })
  }
}

