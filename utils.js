import moment from 'moment'

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
      return response
  } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
  }
}

export function parseJSON(response) {
     return response.json()
}
export function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler(state, action);
  };
}

export function getLocalToken() {
  const access_token = localStorage.getItem('access_token')
  const refresh_token = localStorage.getItem('refresh_token')
  const expires_at = localStorage.getItem('expires_at')
  if (moment().unix() < expires_at) {
    return access_token
  } else {
    return null
  }
}

export function setLocalToken(token) {
  const { access_token, refresh_token, expires_in } = token
  const expires_at = expires_in * 1000 + moment().unix()
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  localStorage.setItem('expires_at', expires_at)
  return {
    access_token,
    refresh_token,
    expires_at
  }
}

export function removeLocalToken() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('expires_at')
}

