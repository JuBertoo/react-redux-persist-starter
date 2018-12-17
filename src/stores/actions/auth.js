export function authAction(userData) {
  return {
    type: 'AUTH_USER',
    payload: {userData}
  }
}

export function logOutAction() {
  return {
    type: 'LOG_OUT_USER',
    payload: {}
  }
}