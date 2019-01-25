const defaultStates = {
  user: {
    isConnected: false,
    admin: false,
    age_range: null,
    avatar: null,
    avatar_url: null,
    company: null,
    company_id: null,
    cook_level: 0,
    deleted_at: null,
    email: "",
    favorite_meals: null,
    first_connection: true,
    firstname: "",
    id: null,
    lastname: "",
    phone_number: "",
    position: null,
    provider: "",
    skip_tuto: false,
    status: null,
    uid: "",
    who_am_i: null
  },
  auth: {}
}
export default (state = defaultStates, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        user: { isConnected: true, ...action.payload.userData },
        auth: action.payload.auth
      }
    case 'LOG_OUT_USER':
      return defaultStates
    default:
      return state
  }
}