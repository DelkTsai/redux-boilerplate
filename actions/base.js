import * as ActionTypes from '../ActionTypes';
import { checkHttpStatus, parseJSON, getLocalToken } from '../utils';

function fetchRequest() {
  return {
    type: ActionTypes.FETCH_MESSAGE_REQUEST
  }
}

function fetchSuccess(session) {
  return {
    type: ActionTypes.FETCH_MESSAGE_SUCCESS,
    payload: {
      session: session
    }
  }
}

function fetchFailure(error) {
  return {
    type: ActionTypes.FETCH_MESSAGE_FAILURE,
    payload: {
      error: error.response
    }
  }
}

function fetch() {
  return (dispatch, state) => {
    dispatch(fetchRequest())
    return fetch('http://localhost:5000/api_v1/accounts/4/contents', {
      headers: {
        'x-auth-token': getLocalToken(),
        'content-type': 'application/json',
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(fetchSuccess(response))
    })
    .catch(error => {
      dispatch(fetchFailure(error))
    })
  }
}

export default class BaseAction {


}


