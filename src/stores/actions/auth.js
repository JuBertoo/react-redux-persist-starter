export function authAction(userData, auth) {
  return {
    type: 'AUTH_USER',
    payload: {userData, auth}
  }
}

export function logOutAction() {
  return {
    type: 'LOG_OUT_USER',
    payload: {}
  }
}

export function watchToken(response) {
  return {
    type: 'WATCH_TOKEN',
    payload: response.headers
  }
}